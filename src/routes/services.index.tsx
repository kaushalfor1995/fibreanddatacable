import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/services";

const title = "Our Services | Fibre, Data Cabling & CCTV Perth";
const description =
  "NBN FTTP pathways, fibre optic installation, fibre splicing, data and network cabling, CCTV, pit and pipe and emergency fibre repairs across Perth WA.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `/services/${s.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 lg:py-20">
          <SectionHeading
            align="left"
            eyebrow="Services"
            title="Fibre, data and telecommunications services in Perth"
            subtitle="Licensed, insured and compliant installations for residential, commercial and civil telecommunications projects."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" body="Give us a call and we'll point you in the right direction." />
    </>
  );
}
