import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaBand } from "@/components/site/CtaBand";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | Fibre & Data Cabling" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const title = `${s.title} Perth | Fibre & Data Cabling`;
    const description = s.short;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            description: s.description,
            areaServed: { "@type": "City", name: "Perth", addressRegion: "WA", addressCountry: "AU" },
            provider: {
              "@type": "LocalBusiness",
              name: "Fibre & Data Cabling",
              telephone: "+61470661700",
              email: "fibredatacable@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Perth",
                addressRegion: "WA",
                addressCountry: "AU",
              },
            },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <nav className="text-xs text-muted-foreground">
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
              <span className="px-2">/</span>
              <Link to="/services" className="hover:text-brand">
                Services
              </Link>
            </nav>
            <span className="mt-5 flex size-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <ServiceIcon name={service.icon} className="size-5" />
            </span>
            <h1 className="mt-5 text-3xl font-semibold text-balance sm:text-4xl">
              {service.title} in Perth
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <img
              src={service.image}
              alt={service.alt}
              width={1200}
              height={912}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <h2 className="text-2xl font-semibold">What's included</h2>
          <ul className="mt-6 space-y-3">
            {service.points.map((p: string) => (
              <li key={p} className="flex gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-display text-lg font-semibold">Why choose us for this work</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Our technicians are fully equipped, safety focused and experienced across residential and
            commercial sites throughout Perth. Every installation is completed to Australian
            telecommunications standards, tested, documented and handed over clean.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Servicing Joondalup, Wanneroo, Stirling, Perth CBD, Fremantle, Rockingham, Armadale,
            Midland and surrounding suburbs.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold">Related services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                <ServiceIcon name={s.icon} className="size-5 text-brand" />
                <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn More <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Need ${service.title.toLowerCase()} in Perth?`} />
    </>
  );
}
