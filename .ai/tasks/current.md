# Current Task

<!--
This file tracks active work only.
When implementation is ready for user testing, set status to Validation.
Only after validation/testing is explicitly complete, append the completion to completed.md and reset this file to Idle.
Do not keep completed work here as the current task.
-->

## Active Task
**Title:** Project initialization planning

**Status:** Validation <!-- Idle | In Progress | Blocked | In Review | Validation -->

**Started:** 2026-09-05

**Priority:** High <!-- High | Medium | Low -->

---

## Description
Conduzir as decisões iniciais para criar um protótipo simples, institucional e replicável em WordPress sobre Conselho Tutelar.


## Acceptance Criteria
- [x] Definir objetivo, publico-alvo e escopo MVP
- [x] Escolher stack simples e replicavel em WordPress
- [x] Registrar decisoes iniciais antes do scaffold

<!-- For active work only. Keep this short; prefer 1-3 criteria.
- [ ] Criterion 1
-->

---

## Validation

- What changed: created static multipage prototype with shared CSS/JS, README, AI config, ADRs, dependency/env references, and backlog.
- What to test: open `index.html`, navigate all menu links, check mobile menu, review placeholder content, and inspect desktop/mobile layout.
- AI verification: `git --version`, `git init`, `git branch -m main`, `git status --branch --short`, and file existence checks passed.
- Waiting on: user validation before completing task tracking.

<!-- Use only when Status is Validation.
- What changed: brief summary
- What to test: concise checklist or commands
- AI verification: commands already run and result
- Waiting on: user validation or explicit finalization
-->

---

## State

| Field | Value |
|-------|-------|
| Branch | main |
| Last file edited | .ai/tasks/current.md |
| Next step | User validates the prototype in browser |
| Blockers | None |

---

## Progress Notes

<!--
Use notes only when they help continue active work.
For tiny/small tasks, omit notes or keep one line.
For medium/large tasks, keep at most 5 short bullets and reference paths/commands instead of details.

- YYYY-MM-DD HH:mm — changed X; next Y; blocker Z
-->

- 2026-09-05 — Decisions selected: static HTML/CSS/JS, no framework, no database, no package manager, no Docker.
- 2026-09-05 — MVP: multipage institutional site for families/responsibles, with safe placeholders and acolhedor institutional visual direction.
- 2026-09-05 — Static scaffold created and moved to Validation.
