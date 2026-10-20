"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/what-you-get", label: "What you get" },
  { href: "/partners", label: "Partners" },
  { href: "/build-value", label: "Build value" },
  { href: "/entrepx-vs-franchise", label: "Vs. franchise" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/book", label: "Book a session" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap" style={{ position: "relative" }}>
        <Link href="/" aria-label="EntrepX home" onClick={() => setOpen(false)}>
          <img src="/entrepx-logo-white.webp" alt="EntrepX, We build owners" width="86" height="44" />
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link" aria-current={path === l.href || path.startsWith(l.href + "/") ? "page" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/survey" className="btn btn-primary btn-small" onClick={() => setOpen(false)}>
            Am I ready?
          </Link>
        </nav>
      </div>
    </header>
  );
}
