import type { Metadata } from "next";
import S4 from "../components/s4-roles";

export const metadata: Metadata = {
  title: "For providers — ClutchD",
  description:
    "Built for everyone who keeps vehicles moving: drivers, mechanics, garages and fleets — one verified network.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S4 />
    </div>
  );
}
