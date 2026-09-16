import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

// 2026-09-16: content imported verbatim from the old site's privacy.html
// (docs/REFERENCE-old-site.md) — early-access/Netlify Forms + GoatCounter wording.
export const metadata: Metadata = {
  title: "Privacy policy — ClutchD",
  description:
    "How ClutchD handles information when you visit the site or sign up for early access.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="14 August 2026"
      intro="ClutchD — connected automotive care, Coimbatore."
      sections={[
        {
          h: "1. What this policy covers",
          body: [
            "This policy explains how the ClutchD site handles information when you visit it or sign up for early access.",
          ],
        },
        {
          h: "2. Early-access signups",
          body: [
            'When you enter your email address to request early access, we receive it through our form provider at the contact address clutchd04dsvs@gmail.com. We use it solely to contact you about the ClutchD Coimbatore launch. We do not share, sell, or rent your email address to anyone.',
            "Your email is stored with our form provider and checked by our team.",
            "You can ask us to remove it at any time by emailing clutchd04dsvs@gmail.com.",
            "We do not send marketing newsletters beyond launch-related updates.",
          ],
        },
        {
          h: "3. Analytics",
          body: [
            "The site uses GoatCounter, a cookie-free, privacy-friendly analytics tool, to count page views and measure general traffic. GoatCounter does not use cookies and does not collect personal data such as names, email addresses, or IP-identifying information.",
          ],
        },
        {
          h: "4. Local storage",
          body: [
            "Your browser may store two small flags locally: your early-access dedupe list and the dismissal state of our privacy notice. These never leave your device.",
          ],
        },
        {
          h: "5. Contact",
          body: [
            "Questions about this policy or your data? Email clutchd04dsvs@gmail.com.",
          ],
        },
      ]}
    />
  );
}
