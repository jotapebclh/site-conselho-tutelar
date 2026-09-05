# ADR-003: Project Structure

## Status

Accepted

## Date

2026-09-05

## Context

The prototype should be simple, maintainable, and easy to map to WordPress pages and blocks.

## Decision

Use a static multipage structure:

- `index.html` for the home page.
- `pages/` for internal pages.
- `assets/css/` for shared styles.
- `assets/js/` for minimal shared JavaScript.

## Consequences

- Each HTML file maps naturally to a WordPress page.
- Shared styling stays centralized in one CSS file.
- JavaScript remains optional and limited to interface behavior such as the mobile menu.
