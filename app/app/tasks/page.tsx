import { sampleTasks } from '../../../lib/product';

export default function TasksPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Tasks</p>
        <h1>Track the work that keeps the agency running.</h1>
        <p className="lead">A simple board for handoffs, open assignments, and the next thing to unblock.</p>
      </section>

      <section className="card">
        <table className="table">
          <thead>
            <tr><th>Task</th><th>Owner</th><th>Status</th><th>Due</th></tr>
          </thead>
          <tbody>
            {sampleTasks.map((task) => (
              <tr key={task.id}>
                <td><strong>{task.title}</strong></td>
                <td>{task.owner}</td>
                <td>{task.status}</td>
                <td>{task.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
