import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { CtaBand } from "@/components/site/CtaBand";
import { googleReviewsUrl } from "@/lib/site";

const title = "Customer Reviews | Fibre & Data Cabling Perth";
const description =
  "Read 5-star reviews from Perth homeowners and businesses for NBN FTTP pathways, data cabling, fibre splicing and CCTV installation.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://fibreanddatacable.com.au/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 text-center lg:py-20">
          <SectionHeading
            eyebrow="Customer Review"
            title="Trusted by Perth homes and businesses"
            subtitle="Selected reviews shared by our customers on Google."
          />
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm font-semibold">Five-star customer feedback</span>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <ReviewsCarousel />
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-border bg-card p-8 text-center shadow-card">
            <h2 className="font-display text-lg font-semibold">Google Reviews</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Read more feedback on our Google Business Profile. Happy with our work?
              Share an honest review to help other Perth locals choose a cabling service.
            </p>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center rounded-md border border-input px-5 py-3 text-sm font-semibold hover:bg-accent">
              View our reviews on Google
            </a>
          </div>
        </div>
      </section>

      <CtaBand title="Join our happy customers" />
    </>
  );
}
