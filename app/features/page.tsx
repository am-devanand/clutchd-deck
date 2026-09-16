import type { Metadata } from "next";
import S2 from "../components/s2-reveal";

export const metadata: Metadata = {
  title: "Features — ClutchD",
  description:
    "Verified mechanics, transparent estimates, secure payments, parts marketplace and digital service history — one connected ecosystem.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S2 />
    </div>
  );
}
