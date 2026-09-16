import type { Metadata } from "next";
import S5 from "../components/s5-proof";

export const metadata: Metadata = {
  title: "Proof — ClutchD",
  description:
    "People on the road, in their own words: drivers, mechanics and garages on the ClutchD network.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S5 />
    </div>
  );
}
