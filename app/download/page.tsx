import type { Metadata } from "next";
import S8 from "../components/s8-final";

export const metadata: Metadata = {
  title: "Early access — ClutchD",
  description:
    "ClutchD is rolling out in Coimbatore — be among the first to try one connected ecosystem for automotive care.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S8 />
    </div>
  );
}
