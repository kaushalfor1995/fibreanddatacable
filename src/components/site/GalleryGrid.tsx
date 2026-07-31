import { useState } from "react";
import { galleryImages } from "@/lib/services";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<number | null>(null);
  const items = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((img, i) => (
          <button
            key={img.caption}
            type="button"
            onClick={() => setActive(i)}
            className="group overflow-hidden rounded-xl border border-border bg-muted text-left shadow-card"
          >
            <span className="block aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </span>
            <span className="block bg-card px-4 py-3 text-sm font-medium">{img.caption}</span>
          </button>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          {active !== null && (
            <>
              <DialogTitle className="sr-only">{items[active].caption}</DialogTitle>
              <img
                src={items[active].src}
                alt={items[active].alt}
                className="max-h-[75vh] w-full object-contain bg-surface"
              />
              <p className="px-6 py-4 text-sm text-muted-foreground">{items[active].caption}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
