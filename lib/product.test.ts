import { describe, expect, it } from 'vitest';
import {
  buildOpsSnapshot,
  buildChecklist,
  buildRoleBrief,
  buildSearchSummary,
  sampleDocs,
  sampleChecklists,
  sampleRoles,
  sampleTasks,
} from './product';

describe('buildOpsSnapshot', () => {
  it('summarizes the team operating system into a dashboard-ready snapshot', () => {
    const snapshot = buildOpsSnapshot(sampleDocs, sampleChecklists, sampleRoles, sampleTasks);

    expect(snapshot.docCount).toBeGreaterThan(0);
    expect(snapshot.nextAction).toContain('onboarding');
    expect(snapshot.health).toBe('organized');
  });
});

describe('buildChecklist', () => {
  it('turns onboarding steps into a printable checklist', () => {
    const checklist = buildChecklist(sampleChecklists[0]);

    expect(checklist.title).toContain('Onboarding');
    expect(checklist.steps.length).toBeGreaterThan(2);
    expect(checklist.shareableCopy).toContain('print');
  });
});

describe('buildRoleBrief', () => {
  it('creates a role page that helps a new hire know what to do', () => {
    const brief = buildRoleBrief(sampleRoles[0], sampleTasks);

    expect(brief.title).toContain(sampleRoles[0].name);
    expect(brief.focus).toContain('responsibility');
    expect(brief.topTasks.length).toBeGreaterThan(0);
  });
});

describe('buildSearchSummary', () => {
  it('returns searchable highlights for docs and tasks', () => {
    const summary = buildSearchSummary('onboarding', sampleDocs, sampleTasks);

    expect(summary.query).toBe('onboarding');
    expect(summary.results.length).toBeGreaterThan(0);
    expect(summary.results[0]).toContain('onboarding');
  });
});
