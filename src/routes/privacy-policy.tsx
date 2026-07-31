import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = "Privacy Policy | Fibre & Data Cabling Perth";
const description =
  "How Fibre & Data Cabling collects, uses and protects personal information submitted through our Perth website and enquiry form.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="container-page max-w-3xl py-16 lg:py-20">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          {site.name} respects your privacy. This policy explains what information we collect through
          this website and how we use it.
        </p>
        <div>
          <h2 className="text-base font-semibold text-foreground">Information we collect</h2>
          <p className="mt-2">
            When you submit an enquiry we collect your name, optional company name, phone number,
            email address, the service you're interested in and your message. We only collect
            information you choose to provide.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">How we use your information</h2>
          <p className="mt-2">
            Your details are used solely to respond to your enquiry, prepare quotes and deliver the
            services you request. We do not sell or rent your personal information to third parties.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Storage and security</h2>
          <p className="mt-2">
            Enquiries are delivered by email to {site.email} and stored securely. We take reasonable
            steps to protect personal information from misuse, loss and unauthorised access.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Access and corrections</h2>
          <p className="mt-2">
            You can request access to, or correction of, the personal information we hold about you by
            contacting us on {site.phone} or at {site.email}.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Third-party services</h2>
          <p className="mt-2">
            This website embeds Google Maps on the contact page and uses an email delivery provider to
            send enquiries. These services may collect limited technical data under their own privacy
            policies.
          </p>
        </div>
        <p>Last updated: January 2026.</p>
      </div>
    </section>
  );
}
