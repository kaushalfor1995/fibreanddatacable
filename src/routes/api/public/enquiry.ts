import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const RECIPIENT = "fibredatacable@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255),
  service: z.string().trim().min(1).max(120),
  message: z.string().trim().min(10).max(2000),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const Route = createFileRoute("/api/public/enquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        const parsed = enquirySchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ error: "Please check the form and try again." }, { status: 400 });
        }
        const data = parsed.data;

        const lovableApiKey = process.env.LOVABLE_API_KEY;
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!lovableApiKey || !resendApiKey) {
          console.error("Email is not configured: missing LOVABLE_API_KEY or RESEND_API_KEY");
          return Response.json(
            { error: "Email is not configured yet. Please call 0470 661 700." },
            { status: 503 },
          );
        }

        const rows: Array<[string, string]> = [
          ["Name", data.name],
          ["Company", data.company?.trim() ? data.company : "—"],
          ["Phone", data.phone],
          ["Email", data.email],
          ["Service Required", data.service],
        ];

        const html = `
          <div style="font-family:Arial,Helvetica,sans-serif;color:#333;line-height:1.6">
            <h2 style="margin:0 0 16px">New website enquiry</h2>
            <table cellpadding="6" style="border-collapse:collapse">
              ${rows
                .map(
                  ([k, v]) =>
                    `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`,
                )
                .join("")}
            </table>
            <h3 style="margin:20px 0 6px">Message</h3>
            <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
          </div>
        `;

        try {
          const response = await fetch(`${GATEWAY_URL}/emails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${lovableApiKey}`,
              "X-Connection-Api-Key": resendApiKey,
            },
            body: JSON.stringify({
              from: "Fibre & Data Cabling <onboarding@resend.dev>",
              to: [RECIPIENT],
              reply_to: data.email,
              subject: `New enquiry: ${data.service} — ${data.name}`,
              html,
            }),
          });

          if (!response.ok) {
            const body = await response.text();
            console.error(`Resend request failed [${response.status}]: ${body}`);
            return Response.json(
              { error: "Your enquiry could not be sent. Please call 0470 661 700." },
              { status: 502 },
            );
          }
        } catch (err) {
          console.error("Enquiry send failed", err);
          return Response.json(
            { error: "Your enquiry could not be sent. Please call 0470 661 700." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
