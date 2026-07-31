import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.short}</p>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
        >
          Learn More <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
