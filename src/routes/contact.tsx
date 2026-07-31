import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { FaqSection } from "@/components/site/FaqSection";
import { faqs, site } from "@/lib/site";

const title = "Contact Us | Fibre & Data Cabling Perth | 0470 661 700";
const description =
  "Contact Fibre & Data Cabling in Perth for fibre optic, NBN FTTP pathway, data cabling and CCTV enquiries. Call 0470 661 700 or send an enquiry online.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 lg:py-20">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Get a free quote"
            subtitle="Tell us about your project and we'll get back to you as soon as possible."
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:py-20">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold">{site.name}</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                <a href={site.phoneHref} className="hover:text-brand">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-brand">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{site.location}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>
                  Monday–Saturday
                  <br />
                  7:00 AM – 5:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <iframe
              title="Map of Perth, Western Australia service area"
              src="https://www.google.com/maps?q=Perth,+Western+Australia&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <FaqSection />
          </div>
        </div>
      </section>
    </>
  );
}
