# Agency Ops Hub

Repo: `agency-ops-hub`

## One-line pitch
One internal home for how the company actually runs.

## Buyer
agencies, remote teams, ops-heavy SMBs

## Pain
SOPs and onboarding live in scattered docs and chat threads.

## Monetization
Subscription per workspace plus guest access.

## Differentiator
Onboarding + handoff flows that are more actionable than a normal docs app.

## What ships in v1
- Document creation
- Checklist templates
- Task assignments
- Searchable knowledge base
- Role-based pages
- Mobile-friendly reading mode

## Screens
- Knowledge base
- SOP editor
- Onboarding checklist
- Role page
- Task board
- Search results

## Routes
- `/`
- `/login`
- `/app`
- `/app/docs`
- `/app/checklists`
- `/app/roles`
- `/app/tasks`
- `/search`

## Deployment
Vercel app, Postgres, search indexing worker, Stripe subscriptions, email for task reminders.

## Launch checklist
- Ship opinionated templates for agencies
- Make onboarding a first-class workflow
- Include export/print options for SOPs

## v2
- Video SOP embeds
- Approval flows
- Audit logs
- External guest portals

## Local development
```bash
pnpm install
pnpm dev
```

## Environment variables
Copy `.env.example` and fill in the provider keys for auth, storage, email, and billing.

## Files that matter
- `app/page.tsx`
- `app/app/page.tsx`
- `app/api/health/route.ts`
- `lib/product.ts`
- `.github/workflows/ci.yml`
