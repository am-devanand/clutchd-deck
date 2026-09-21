import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stitch/navbar-logo.png"
      alt="ClutchD – Mechanic & Automobile App"
      width={989}
      height={258}
      priority
      className={`h-full w-auto object-contain ${className}`}
    />
  );
}
