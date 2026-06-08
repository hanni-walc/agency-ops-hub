import { buildSearchSummary, sampleDocs, sampleTasks } from '../../lib/product';

const search = buildSearchSummary('onboarding', sampleDocs, sampleTasks);

export default function SearchPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Search</p>
        <h1>Find the right doc or task in seconds.</h1>
        <p className="lead">This is the fastest way to surface onboarding, handoff, and process steps without hunting through chat.</p>
      </section>

      <section className="card">
        <p className="kicker">Query</p>
        <h2>{search.query}</h2>
        <ul className="list">
          {search.results.map((result) => <li key={result}>{result}</li>)}
        </ul>
      </section>
    </main>
  );
}
