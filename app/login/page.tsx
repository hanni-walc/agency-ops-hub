import { withBasePath } from "@/lib/site-path";
export default function LoginPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Sign in</p>
        <h1>Enter the ops hub.</h1>
        <p className="lead">Log in to manage the company playbook, task board, and onboarding flow.</p>
      </section>

      <section className="card">
        <div className="grid cols-2">
          <label className="card" style={{ padding: 16 }}>
            <p className="kicker">Email</p>
            <input className="input" placeholder="ops@agency.com" />
          </label>
          <label className="card" style={{ padding: 16 }}>
            <p className="kicker">Password</p>
            <input className="input" placeholder="••••••••" type="password" />
          </label>
        </div>
        <div className="row" style={{ marginTop: 16 }}>
          <a className="button" href={withBasePath('/app')}>Continue</a>
          <a className="ghost" href={withBasePath('/')}>Back to home</a>
        </div>
      </section>
    </main>
  );
}
