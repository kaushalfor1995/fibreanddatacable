import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/services";
import { processSteps, whyChooseUs } from "@/lib/site";

const title = "About Us | Fibre & Data Cabling Perth";
const description =
  "Fibre & Data Cable Pathway is a trusted Perth telecommunications contractor delivering quality workmanship and reliable service for residential and commercial clients.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 lg:py-20">
          <SectionHeading
            align="left"
            eyebrow="About"
            title="Perth's trusted fibre and data cabling contractor"
            subtitle="Fibre & Data Cable Pathway delivers quality workmanship, reliable service and customer satisfaction for residential and commercial clients across Western Australia."
          />
        </div>
      </section>

      <section className="container-page grid items-start gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div className="overflow-hidden rounded-2xl border border-border shadow-card">
          <img
            src={services[0]!.image}
            alt={services[0]!.alt}
            loading="lazy"
            width={1600}
            height={1104}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Fibre &amp; Data Cabling is a Perth-based telecommunications contractor specialising in
            NBN FTTP pathways, fibre optic installation, structured data cabling, network cabling and
            CCTV systems. We work with homeowners, builders, business owners and developers right
            across the Perth metropolitan area.
          </p>
          <p>
            Every project starts with a proper conversation about what you need and a site inspection
            so the scope is clear before any work begins. From there our technicians install to NBN
            specifications and Australian telecommunications standards, test and certify the work, and
            leave the site clean.
          </p>
          <p>
            We're known for tidy conduit runs, honest quoting and turning up when we say we will —
            whether that's a single lead-in conduit for a new home or a full commercial comms fit-out.
          </p>
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {whyChooseUs.slice(0, 6).map((w) => (
              <div key={w.title} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-brand" /> {w.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Process" title="How we work" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="font-display text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Let's talk about your project" />
    </>
  );
}
