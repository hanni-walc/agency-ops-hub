export type Doc = {
  id: string;
  title: string;
  category: string;
  summary: string;
};

export type Checklist = {
  id: string;
  title: string;
  audience: string;
  steps: string[];
};

export type Role = {
  id: string;
  name: string;
  responsibility: string;
  meetingCadence: string;
};

export type Task = {
  id: string;
  title: string;
  owner: string;
  status: 'todo' | 'doing' | 'done';
  due: string;
};

export type OpsSnapshot = {
  health: 'organized' | 'busy' | 'overloaded';
  docCount: number;
  checklistCount: number;
  roleCount: number;
  taskCount: number;
  nextAction: string;
};

export type ChecklistPreview = {
  title: string;
  steps: string[];
  shareableCopy: string;
};

export type RoleBrief = {
  title: string;
  focus: string;
  cadence: string;
  topTasks: string[];
};

export type SearchSummary = {
  query: string;
  results: string[];
};

export const TITLE = 'Agency Ops Hub';
export const PROMISE = 'One internal home for how the company actually runs.';
export const BUYER = 'agencies, remote teams, ops-heavy SMBs';
export const PAIN = 'SOPs and onboarding live in scattered docs and chat threads.';
export const PRICING = 'Subscription per workspace plus guest access.';
export const WEDGE = 'Onboarding + handoff flows that are more actionable than a normal docs app.';
export const DEPLOY = 'Vercel app, Postgres, search indexing worker, Stripe subscriptions, email for task reminders.';
export const MVP = [
  'Document creation',
  'Checklist templates',
  'Task assignments',
  'Searchable knowledge base',
  'Role-based pages',
  'Mobile-friendly reading mode',
];
export const SCREENS = [
  'Knowledge base',
  'SOP editor',
  'Onboarding checklist',
  'Role page',
  'Task board',
  'Search results',
];
export const ROUTES = ['/', '/login', '/app', '/app/docs', '/app/checklists', '/app/roles', '/app/tasks', '/search'];
export const LAUNCH = [
  'Ship opinionated templates for agencies',
  'Make onboarding a first-class workflow',
  'Include export/print options for SOPs',
];
export const V2 = ['Video SOP embeds', 'Approval flows', 'Audit logs', 'External guest portals'];

export const sampleDocs: Doc[] = [
  { id: 'doc-1', title: 'Agency onboarding SOP', category: 'onboarding', summary: 'A step-by-step route for turning a new client into a live account.' },
  { id: 'doc-2', title: 'Client handoff checklist', category: 'handoff', summary: 'Everything the team needs before a project moves from sales to delivery.' },
  { id: 'doc-3', title: 'Weekly operations review', category: 'ops', summary: 'A concise weekly review that keeps blockers visible.' },
];

export const sampleChecklists: Checklist[] = [
  {
    id: 'check-1',
    title: 'Onboarding checklist',
    audience: 'new hire',
    steps: ['Create workspace access', 'Review the SOP library', 'Meet the project owner', 'Confirm the first deliverable'],
  },
  {
    id: 'check-2',
    title: 'Client launch checklist',
    audience: 'delivery team',
    steps: ['Confirm scope', 'Share timeline', 'Assign owners', 'Schedule kickoff'],
  },
];

export const sampleRoles: Role[] = [
  { id: 'role-1', name: 'Ops Lead', responsibility: 'Owns process quality and team handoffs.', meetingCadence: 'Daily standup plus weekly review' },
  { id: 'role-2', name: 'Project Manager', responsibility: 'Tracks client delivery and keeps deadlines visible.', meetingCadence: 'Twice-weekly delivery sync' },
  { id: 'role-3', name: 'Account Strategist', responsibility: 'Keeps scope and client communication aligned.', meetingCadence: 'Weekly client check-in' },
];

export const sampleTasks: Task[] = [
  { id: 'task-1', title: 'Publish onboarding SOP', owner: 'Mina', status: 'doing', due: '2026-06-08' },
  { id: 'task-2', title: 'Review checklist template', owner: 'Jordan', status: 'todo', due: '2026-06-09' },
  { id: 'task-3', title: 'Assign client handoff owner', owner: 'Ari', status: 'done', due: '2026-06-06' },
  { id: 'task-4', title: 'Search index refresh', owner: 'Mina', status: 'doing', due: '2026-06-08' },
];

function contains(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export function buildOpsSnapshot(docs: Doc[], checklists: Checklist[], roles: Role[], tasks: Task[]): OpsSnapshot {
  const docCount = docs.length;
  const checklistCount = checklists.length;
  const roleCount = roles.length;
  const taskCount = tasks.length;
  const doingTasks = tasks.filter((task) => task.status === 'doing').length;
  const health: OpsSnapshot['health'] = taskCount <= 4 && doingTasks <= 2 ? 'organized' : taskCount <= 8 ? 'busy' : 'overloaded';

  return {
    health,
    docCount,
    checklistCount,
    roleCount,
    taskCount,
    nextAction: 'Finish onboarding templates and handoff docs for the next client joiner.',
  };
}

export function buildChecklist(checklist: Checklist): ChecklistPreview {
  return {
    title: checklist.title,
    steps: checklist.steps,
    shareableCopy: `print this checklist for ${checklist.audience} onboarding and keep it visible during handoff.`,
  };
}

export function buildRoleBrief(role: Role, tasks: Task[]): RoleBrief {
  const topTasks = tasks.filter((task) => task.owner === role.name.split(' ')[0] || task.status !== 'done').map((task) => task.title).slice(0, 3);
  return {
    title: `${role.name} role brief`,
    focus: `Primary responsibility: ${role.responsibility}`,
    cadence: role.meetingCadence,
    topTasks,
  };
}

export function buildSearchSummary(query: string, docs: Doc[], tasks: Task[]): SearchSummary {
  const results = [
    ...docs.filter((doc) => contains(doc.title, query) || contains(doc.category, query) || contains(doc.summary, query)).map((doc) => `${doc.title} · ${doc.category}`),
    ...tasks.filter((task) => contains(task.title, query) || contains(task.owner, query)).map((task) => `${task.title} · ${task.owner}`),
  ];

  return { query, results: results.length ? results : [`No exact matches for ${query}. Try onboarding, handoff, or search.`] };
}

export const product = {
  title: TITLE,
  promise: PROMISE,
  buyer: BUYER,
  pain: PAIN,
  pricing: PRICING,
  wedge: WEDGE,
  deploy: DEPLOY,
  mvp: MVP,
  screens: SCREENS,
  routes: ROUTES,
  launch: LAUNCH,
  v2: V2,
  stack: ['Next.js', 'TypeScript', 'Postgres', 'Stripe', 'Vercel'],
};
