export default function SetupNeeded() {
  return (
    <div className="cmd-login">
      <div className="cmd-card">
        <div className="cmd-lbl">EntrepX Command</div>
        <h1 className="cmd-h1" style={{ fontSize: 26 }}>Not connected to a database yet.</h1>
        <p className="cmd-muted" style={{ margin: 0 }}>
          Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY for this deployment, then reload.
        </p>
      </div>
    </div>
  );
}
