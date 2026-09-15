import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stitch/clutchd-logo.png"
      alt="ClutchD – Mechanic & Automobile App"
      width={400}
      height={220}
      priority
      className={`h-full w-auto object-contain ${className}`}
    />
  );
}
