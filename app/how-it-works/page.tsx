import type { Metadata } from "next";
import S3 from "../components/s3-steps";

export const metadata: Metadata = {
  title: "How it works — ClutchD",
  description:
    "From breakdown to back on the road: request, match, accept, en route, in progress, done — six real job states with live tracking.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S3 />
    </div>
  );
}
