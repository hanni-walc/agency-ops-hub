import { sampleDocs } from '../../../lib/product';

export default function DocsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Knowledge base</p>
        <h1>SOPs that are easy to find and easy to follow.</h1>
        <p className="lead">Every doc carries a clear category, summary, and action path for the team.</p>
      </section>

      <section className="grid cols-2">
        {sampleDocs.map((doc) => (
          <article key={doc.id} className="card">
            <p className="kicker">{doc.category}</p>
            <h2>{doc.title}</h2>
            <p className="muted">{doc.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
