export const TITLE = "Agency Ops Hub";
export const PROMISE = "One internal home for how the company actually runs.";
export const BUYER = "agencies, remote teams, ops-heavy SMBs";
export const PAIN = "SOPs and onboarding live in scattered docs and chat threads.";
export const PRICING = "Subscription per workspace plus guest access.";
export const WEDGE = "Onboarding + handoff flows that are more actionable than a normal docs app.";
export const DEPLOY = "Vercel app, Postgres, search indexing worker, Stripe subscriptions, email for task reminders.";
export const MVP = [
  "Document creation",
  "Checklist templates",
  "Task assignments",
  "Searchable knowledge base",
  "Role-based pages",
  "Mobile-friendly reading mode"
];
export const SCREENS = [
  "Knowledge base",
  "SOP editor",
  "Onboarding checklist",
  "Role page",
  "Task board",
  "Search results"
];
export const ROUTES = [
  "/",
  "/login",
  "/app",
  "/app/docs",
  "/app/checklists",
  "/app/roles",
  "/app/tasks",
  "/search"
];
export const LAUNCH = [
  "Ship opinionated templates for agencies",
  "Make onboarding a first-class workflow",
  "Include export/print options for SOPs"
];
export const V2 = [
  "Video SOP embeds",
  "Approval flows",
  "Audit logs",
  "External guest portals"
];
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
  stack: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
};
