import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to get started?",
  body = "Tell us about your project and we'll get back to you with a clear, competitive quote.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-y border-border bg-brand-soft">
      <div className="container-page flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">{body}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.phoneHref}>
              <Phone className="size-4" /> Call {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
