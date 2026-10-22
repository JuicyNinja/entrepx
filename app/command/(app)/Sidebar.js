"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ items, name, roleLabel }) {
  const path = usePathname();
  const current = (href) => (href === "/command" ? path === href : path === href || path.startsWith(href + "/"));
  return (
    <nav className="cmd-side" aria-label="Command">
      <div className="cmd-brand"><b>Entrep<span>X</span></b><small>Command</small></div>
      {items.map((i) => (
        <Link key={i.href} href={i.href} className="cmd-nav" aria-current={current(i.href) ? "page" : undefined}>
          {i.label}
          {i.count > 0 && <span className="cmd-badge" aria-label={`${i.count} waiting`}>{i.count}</span>}
        </Link>
      ))}
      <div className="cmd-me">
        {name}<br />{roleLabel}
        <form action="/command/signout" method="post"><button>Sign out</button></form>
      </div>
    </nav>
  );
}
