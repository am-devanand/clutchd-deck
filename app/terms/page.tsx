import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

// 2026-09-16: content imported verbatim from the old site's terms.html
// (docs/REFERENCE-old-site.md) — illustrative-preview + early-access wording.
export const metadata: Metadata = {
  title: "Terms of use — ClutchD",
  description:
    "The terms that apply when you use the ClutchD site or sign up for early access.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="14 August 2026"
      intro="ClutchD — connected automotive care, Coimbatore."
      sections={[
        {
          h: "1. The site",
          body: [
            "The ClutchD site introduces the ClutchD platform and collects early-access interest. Everything shown — features, prices, stats, testimonials, timelines — is an illustrative preview of the planned service and does not constitute an offer, contract, or guarantee of availability, pricing, or service levels.",
          ],
        },
        {
          h: "2. Early access",
          body: [
            "Submitting your email requests early access to the ClutchD Coimbatore rollout. It does not guarantee access, timing, or pricing. We may contact you at the address you provide.",
          ],
        },
        {
          h: "3. Acceptable use",
          body: [
            "Do not submit false, abusive, or automated form submissions.",
            "Do not attempt to disrupt, scrape, or probe the site.",
            "Do not reuse ClutchD content, marks, or visuals without permission.",
          ],
        },
        {
          h: "4. No warranty",
          body: [
            'The site is provided "as is" without warranties of any kind. We may change, suspend, or remove the site or the early-access program at any time.',
          ],
        },
        {
          h: "5. Contact",
          body: ["Questions about these terms? Email clutchd04dsvs@gmail.com."],
        },
      ]}
    />
  );
}
