# ADR-001: Language And Framework Choice

## Status

Accepted

## Date

2026-09-05

## Context

The project is an academic prototype for an institutional and informational website about Conselho Tutelar, developed with CRAS participation and intended to become a final WordPress project.

## Decision

Use static HTML, CSS, and minimal JavaScript without a frontend framework, build step, package manager, or runtime beyond the browser.

## Consequences

- The prototype can be opened directly in a browser or with Live Server.
- Pages and sections are easy to reproduce later as WordPress pages, menus, and blocks.
- The project avoids unnecessary dependencies for a simple institutional MVP.
- Reusable WordPress-specific behavior should be deferred until the final WordPress implementation.
