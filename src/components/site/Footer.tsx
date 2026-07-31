import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-lg font-semibold">{site.name}</h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-brand">
                <Phone className="size-4 text-brand" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-brand">
                <Mail className="size-4 text-brand" /> {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-brand" /> {site.location}
            </li>
            <li className="inline-flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 text-brand" /> {site.hours}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase">Service Area</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Servicing the greater Perth metropolitan area including Joondalup, Wanneroo, Stirling,
            Fremantle, Rockingham, Armadale, Midland and the Perth CBD.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy-policy" className="hover:text-brand">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-brand">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 text-center text-xs text-muted-foreground">
          Copyright © 2026 {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
