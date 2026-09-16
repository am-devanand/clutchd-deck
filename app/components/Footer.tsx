import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/stitch/navbar-logo.png"
                alt="ClutchD"
                width={160}
                height={50}
                className="mb-5 h-10 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              24/7 Roadside Assistance and Rapid Dispatch Platform.
              Precision mechanics at your exact coordinates.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Live in Coimbatore
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Platform</h3>
            <ul className="space-y-3">
              {[
                { href: "/features",     label: "Features" },
                { href: "/how-it-works", label: "How it Works" },
                { href: "/for-you",      label: "For You" },
                { href: "/app",          label: "App Showcase" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/impact",    label: "Impact" },
                { href: "/roadmap",   label: "Roadmap" },
                { href: "/download",  label: "Get the App" },
                { href: "#",          label: "Privacy Policy" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ClutchD. All rights reserved.
          </p>
          <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-blue-500">
            CLUTCH-ALPHA-884 ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
