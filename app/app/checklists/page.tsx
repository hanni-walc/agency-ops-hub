import { sampleChecklists } from '../../../lib/product';

export default function ChecklistsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Checklists</p>
        <h1>Reusable onboarding and launch checklists.</h1>
        <p className="lead">Designed for real handoffs so every step is visible on mobile and printable when needed.</p>
      </section>

      <section className="grid cols-2">
        {sampleChecklists.map((checklist) => (
          <article key={checklist.id} className="card">
            <p className="kicker">{checklist.audience}</p>
            <h2>{checklist.title}</h2>
            <ul className="list">{checklist.steps.map((step) => <li key={step}>{step}</li>)}</ul>
          </article>
        ))}
      </section>
    </main>
  );
}
