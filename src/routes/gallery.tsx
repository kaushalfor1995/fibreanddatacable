import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Gallery | Fibre & Data Cabling Perth Installations";
const description =
  "See our workmanship: NBN FTTP conduit pathways, lead-in conduit trenching, Cat6 data outlets, CCTV installs and commercial comms racks across Perth.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 lg:py-20">
          <SectionHeading
            align="left"
            eyebrow="Gallery"
            title="Our recent work across Perth"
            subtitle="Click any image to view it full size."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <GalleryGrid />
      </section>

      <CtaBand title="Want work like this at your place?" />
    </>
  );
}
