import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/services";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  service: z.string().trim().min(1, "Please select a service").max(120),
  message: z.string().trim().min(10, "Please tell us a little about the job").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const values = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/public/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as { error?: string });
        throw new Error(body.error || "Your enquiry could not be sent. Please call us instead.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-12 text-brand" />
        <h3 className="mt-4 font-display text-xl font-semibold">Enquiry received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Thank you for contacting Fibre &amp; Data Cabling. Your enquiry has been received
          successfully. We will contact you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required>
          <Input id="name" name="name" autoComplete="name" maxLength={100} />
        </Field>
        <Field label="Company (Optional)" name="company" error={errors.company}>
          <Input id="company" name="company" autoComplete="organization" maxLength={120} />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone} required>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
        </Field>
        <Field label="Email" name="email" error={errors.email} required>
          <Input id="email" name="email" type="email" autoComplete="email" maxLength={255} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Service Required" name="service" error={errors.service} required>
            <select
              id="service"
              name="service"
              defaultValue=""
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message" name="message" error={errors.message} required>
            <Textarea id="message" name="message" rows={5} maxLength={2000} />
          </Field>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> Send Enquiry
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-brand"> *</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
