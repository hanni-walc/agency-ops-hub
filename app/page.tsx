import { BUYER, LAUNCH, PROMISE, V2, WEDGE, buildChecklist, buildOpsSnapshot, buildRoleBrief, buildSearchSummary, sampleChecklists, sampleDocs, sampleRoles, sampleTasks } from '../lib/product';

const snapshot = buildOpsSnapshot(sampleDocs, sampleChecklists, sampleRoles, sampleTasks);
const checklist = buildChecklist(sampleChecklists[0]);
const roleBrief = buildRoleBrief(sampleRoles[0], sampleTasks);
const search = buildSearchSummary('onboarding', sampleDocs, sampleTasks);

export default function HomePage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Agency Ops Hub</p>
        <h1>{PROMISE}</h1>
        <p className="lead">{WEDGE} Built for {BUYER} that need SOPs, onboarding, and handoffs to live in one place.</p>
        <div className="row">
          <a className="button" href="/app">Open dashboard</a>
          <a className="ghost" href="/search">Try search</a>
        </div>
      </section>

      <section className="grid cols-3">
        <article className="card"><p className="kicker">Health</p><h2>{snapshot.health}</h2><p className="muted">{snapshot.nextAction}</p></article>
        <article className="card"><p className="kicker">Docs</p><h2>{snapshot.docCount}</h2><p className="muted">Searchable operating docs.</p></article>
        <article className="card"><p className="kicker">Tasks</p><h2>{snapshot.taskCount}</h2><p className="muted">Active work tracked in the hub.</p></article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Final artifact</p>
          <h2>{checklist.title}</h2>
          <p className="muted">{checklist.shareableCopy}</p>
          <ul className="list">{checklist.steps.map((step) => <li key={step}>{step}</li>)}</ul>
        </article>
        <article className="card">
          <p className="kicker">Role brief</p>
          <h2>{roleBrief.title}</h2>
          <p className="muted">{roleBrief.focus}</p>
          <p className="muted">Cadence: {roleBrief.cadence}</p>
        </article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Search preview</p>
          <h2>{search.query}</h2>
          <ul className="list">{search.results.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="card">
          <p className="kicker">Launch checklist</p>
          <ul className="list">{LAUNCH.map((item) => <li key={item}>{item}</li>)}</ul>
          <div>{V2.map((item) => <span key={item} className="pill">{item}</span>)}</div>
        </article>
      </section>
    </main>
  );
}
