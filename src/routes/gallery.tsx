import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CtaBand } from "@/components/site/CtaBand";

const url = "https://fibreanddatacable.com.au/gallery/";
const title = "Gallery | Fibre & Data Cabling Perth Installations";
const description =
  "View real job photos from Fibre & Data Cabling: NBN connection equipment, fibre testing, underground conduit and Ethernet network connections.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 lg:py-20">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Gallery"
            title="Our recent work across Perth"
            subtitle="Real job photos: fibre connections, optical testing, conduit works and network equipment. Click any image to view it full size."
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
