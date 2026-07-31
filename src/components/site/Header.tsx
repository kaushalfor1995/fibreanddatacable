import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              {/* fibre optic cable: jacket, connector ferrule and fanned light strands */}
              <path d="M2 12h4" />
              <rect x="6" y="9.5" width="4.5" height="5" rx="1" />
              <path d="M10.5 12h1.5" />
              <path d="M12 12c3 0 4.5-4 8-4.5" />
              <path d="M12 12c3.2 0 4.8 4 8 4.5" />
              <path d="M12 12h7.5" />
              <circle cx="20.6" cy="7.2" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="20.6" cy="16.8" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="20.6" cy="12" r="1.2" fill="currentColor" stroke="none" />
            </svg>

          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold">Fibre &amp; Data Cabling</span>
            <span className="block text-xs text-muted-foreground">Perth, Western Australia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brand bg-brand-soft" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={site.phoneHref}>
              <Phone className="size-4" /> {site.phone}
            </a>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-brand" }}
                className="border-b border-border py-3 text-sm font-medium last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 pb-2">
              <Button asChild variant="outline">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> Call {site.phone}
                </a>
              </Button>
              <Button asChild onClick={() => setOpen(false)}>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
