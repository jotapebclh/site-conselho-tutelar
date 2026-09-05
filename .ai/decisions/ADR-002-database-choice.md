# ADR-002: Database Choice

## Status

Accepted

## Date

2026-09-05

## Context

The MVP is an informational institutional website with static pages, safe contact placeholders, and no user accounts or dynamic content requirements.

## Decision

Do not use a database in the prototype. Content will remain in static HTML files. The final WordPress version will use WordPress content management and its own database.

## Consequences

- There is no backend, migration, ORM, or environment configuration.
- The prototype remains simple for academic presentation and local preview.
- Dynamic features such as blog posts, forms, or content editing should be represented as placeholders unless explicitly added later.
