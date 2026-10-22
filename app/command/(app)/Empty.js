import Link from "next/link";

export function Empty({ title, children, action }) {
  return (
    <div className="cmd-card cmd-empty">
      <b>{title}</b>
      {children && <div className="cmd-muted">{children}</div>}
      {action && <Link className="cmd-btn" href={action.href}>{action.label}</Link>}
    </div>
  );
}

export function LoadError({ error }) {
  return <div className="cmd-err" role="alert">That didn't load. Try again, and if it keeps happening tell Tad. ({error.message})</div>;
}

export function Planned({ title, lead, items }) {
  return (
    <>
      <div className="cmd-head"><div><div className="cmd-lbl">Phase 1</div><h1 className="cmd-h1">{title}</h1></div></div>
      <div className="cmd-card" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <p style={{ margin: 0 }}>{lead}</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>{items.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
    </>
  );
}
