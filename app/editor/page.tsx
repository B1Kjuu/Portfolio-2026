export default function EditorPage() {
  return (
    <main className="page page--placeholder">
      <section className="container placeholder-shell">
        <div className="panel placeholder-card">
          <p className="eyebrow">Editor Portfolio</p>
          <h1 className="display display--xl">Coming soon.</h1>
          <p className="lead">
            The editor side is still being built. For now, the Tech portfolio is live and ready to view.
          </p>
          <div className="button-row">
            <a className="button button--primary" href="/tech">
              Go to Tech Portfolio
            </a>
            <a className="button button--ghost" href="/">
              Go back
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
