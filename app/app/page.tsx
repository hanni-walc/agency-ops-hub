import { buildOpsSnapshot, sampleChecklists, sampleDocs, sampleRoles, sampleTasks } from '../../lib/product';

const snapshot = buildOpsSnapshot(sampleDocs, sampleChecklists, sampleRoles, sampleTasks);

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Dashboard</p>
        <h1>Run the company from one operating system.</h1>
        <p className="lead">Keep docs, checklists, roles, and tasks connected so the team always knows what to do next.</p>
        <div className="row">
          <a className="button" href="/app/docs">Open docs</a>
          <a className="ghost" href="/search">Search workspace</a>
        </div>
      </section>

      <section className="stats">
        <div className="stat"><strong>{snapshot.health}</strong><span className="muted">workspace health</span></div>
        <div className="stat"><strong>{snapshot.docCount}</strong><span className="muted">docs</span></div>
        <div className="stat"><strong>{snapshot.checklistCount}</strong><span className="muted">checklists</span></div>
        <div className="stat"><strong>{snapshot.taskCount}</strong><span className="muted">tasks</span></div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Next action</p>
          <h2>{snapshot.nextAction}</h2>
        </article>
        <article className="card">
          <p className="kicker">What this replaces</p>
          <ul className="list">
            <li>Scattered SOP docs</li>
            <li>Chat-based onboarding</li>
            <li>Unclear handoff ownership</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
