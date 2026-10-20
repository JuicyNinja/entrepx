import Link from "next/link";

export default function Next({ title, href, label, eyebrow = "Next" }) {
  return (
    <section className="band-vault next">
      <div className="wrap">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h1">{title}</h2>
        </div>
        <div className="actions">
          {href && <Link className="btn btn-on-vault" href={href}>{label}</Link>}
          <Link className="btn btn-primary" href="/survey">Take the free survey</Link>
        </div>
      </div>
    </section>
  );
}
