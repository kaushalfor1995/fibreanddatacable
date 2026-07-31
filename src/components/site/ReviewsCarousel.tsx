import { Star } from "lucide-react";
import { reviews } from "@/lib/site";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function ReviewsCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-6xl">
      <CarouselContent className="-ml-4">
        {reviews.map((r) => (
          <CarouselItem key={r.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
            <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.service}</span>
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
