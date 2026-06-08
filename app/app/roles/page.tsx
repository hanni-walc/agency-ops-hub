import { sampleRoles, sampleTasks } from '../../../lib/product';

export default function RolesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Roles</p>
        <h1>Make ownership obvious.</h1>
        <p className="lead">Each role page tells the team what the person owns and how often they should show up.</p>
      </section>

      <section className="grid cols-2">
        {sampleRoles.map((role) => (
          <article key={role.id} className="card">
            <p className="kicker">{role.meetingCadence}</p>
            <h2>{role.name}</h2>
            <p className="muted">{role.responsibility}</p>
            <ul className="list">
              {sampleTasks.filter((task) => task.status !== 'done').slice(0, 2).map((task) => (
                <li key={task.id}>{task.title} · {task.owner}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
