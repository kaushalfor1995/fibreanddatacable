import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Star, Clock, Award } from "lucide-react";
import heroConduit from "@/assets/hero-conduit.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/services";
import { faqs, processSteps, site, whyChooseUs } from "@/lib/site";

const title = "Fibre & Data Cabling Perth | NBN FTTP Pathway Specialists";
const description =
  "Perth's fibre optic, NBN FTTP pathway, data cabling and CCTV installation specialists. Quality workmanship for residential and commercial projects. Call 0470 661 700.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
  component: Home,
});

const featured = services[0]!;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface">
        <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              <ShieldCheck className="size-3.5" /> Perth, Western Australia
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
              Professional Fibre &amp; Data Cabling Solutions Across Perth
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Specialists in NBN FTTP Pathways, Fibre Optic Installation, Data Cabling, CCTV
              Installation and Telecommunications Services for Residential and Commercial Projects.
            </p>
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
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["NBN compliant workmanship", "Fully insured", "Residential & commercial"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            <img
              src={heroConduit}
              alt="Telecommunications technician in full PPE installing white surface-mounted conduit above an NBN LUCA box on a modern two-storey Perth home"
              width={1600}
              height={1104}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-background">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, label: "Quality Workmanship", sub: "Neat, compliant installs" },
            { icon: ShieldCheck, label: "Safety Focused", sub: "Full PPE & SWMS" },
            { icon: Clock, label: "Fast Response", sub: "Same-day quotes" },
            { icon: Star, label: "5-Star Rated", sub: "Trusted across Perth" },
          ].map((i) => (
            <div key={i.label} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <i.icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{i.label}</span>
                <span className="block text-xs text-muted-foreground">{i.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <img
              src={services[3]!.image}
              alt={services[3]!.alt}
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A trusted Perth telecommunications contractor"
              subtitle="Fibre & Data Cable Pathway delivers quality workmanship, reliable service and genuine customer satisfaction for residential and commercial clients right across the Perth metropolitan area."
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From NBN FTTP pathways and lead-in conduit through to structured data cabling, fibre
              splicing and CCTV, every job is planned properly, installed neatly and tested before we
              hand it over. No shortcuts, no mess left behind.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/about">
                More About Us <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured service */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Featured Service" title={`${featured.title} ⭐`} />
          <div className="mt-10 grid items-center gap-10 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card lg:grid-cols-2 lg:p-10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={featured.image}
                alt={featured.alt}
                loading="lazy"
                width={1600}
                height={1104}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">{featured.description}</p>
              <ul className="mt-6 space-y-3">
                {featured.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link to="/services/$slug" params={{ slug: featured.slug }}>
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete fibre and data solutions"
          subtitle="Licensed telecommunications services for homes, businesses and developments across Perth."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Services <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Why Choose Us" title="Reasons Perth trusts our team" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <CheckCircle2 className="size-5 text-brand" />
                <h3 className="mt-4 font-display text-base font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Our Process"
          title="Simple, transparent, start to finish"
          subtitle="Six clear steps from your first call to a fully tested, documented installation."
        />
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
      </section>

      {/* Gallery preview */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Work"
            title="Recent installations"
            subtitle="A snapshot of the workmanship we deliver on Perth homes and commercial sites."
          />
          <div className="mt-12">
            <GalleryGrid limit={3} />
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/gallery">
                View Gallery <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Customer Review"
          title="What our customers say"
          subtitle="Rated 5 stars by homeowners and businesses across the Perth metro area."
        />
        <div className="mt-12">
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <FaqSection />
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {services.slice(6, 9).map((s) => (
            <div key={s.slug} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <ServiceIcon name={s.icon} className="size-5 text-brand" />
              <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
