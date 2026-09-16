import type { Metadata } from "next";
import S7 from "../components/s7-roadmap";

export const metadata: Metadata = {
  title: "Roadmap — ClutchD",
  description:
    "Where ClutchD is headed: deeper diagnostics, fleet contracts, and statewide expansion from Coimbatore across Tamil Nadu.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S7 />
    </div>
  );
}
