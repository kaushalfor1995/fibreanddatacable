import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = "Terms & Conditions | Fibre & Data Cabling Perth";
const description =
  "Terms and conditions for quotes, works and website use provided by Fibre & Data Cabling, Perth, Western Australia.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="container-page max-w-3xl py-16 lg:py-20">
      <h1 className="text-3xl font-semibold">Terms &amp; Conditions</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="text-base font-semibold text-foreground">Quotes</h2>
          <p className="mt-2">
            Quotes are based on the scope discussed and any site inspection carried out, and are valid
            for 30 days unless stated otherwise. Variations discovered on site (such as blocked
            conduit, rock, or additional pathway works) will be discussed and confirmed with you
            before proceeding.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Scope of works</h2>
          <p className="mt-2">
            All cabling and pathway works are carried out in accordance with Australian
            telecommunications standards and, where applicable, NBN specifications. Connection and
            activation of services by carriers remains the responsibility of the relevant carrier.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Site access</h2>
          <p className="mt-2">
            The client is responsible for providing safe and reasonable access to the work area,
            including access to power, pits and internal spaces where required.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Payment</h2>
          <p className="mt-2">
            Payment terms are stated on your quote or invoice. Deposits may be required for materials
            on larger projects.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Warranty</h2>
          <p className="mt-2">
            Workmanship is warranted against defects for 12 months from completion. Manufacturer
            warranties apply to supplied hardware. Damage caused by third parties, other trades or
            misuse is excluded.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Website use</h2>
          <p className="mt-2">
            Content on this website is provided for general information only and may change without
            notice. For anything specific to your property, please contact us on {site.phone} or at{" "}
            {site.email}.
          </p>
        </div>
        <p>Last updated: January 2026.</p>
      </div>
    </section>
  );
}
