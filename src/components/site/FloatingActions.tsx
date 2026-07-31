import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {show && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-card transition-colors hover:bg-accent"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-primary/90"
      >
        <Phone className="size-4" />
        <span className="hidden sm:inline">{site.phone}</span>
        <span className="sm:hidden">Call Now</span>
      </a>
    </div>
  );
}
