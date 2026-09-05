<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Documentation & Fumadocs Guidelines

When working on or editing the docs project:

- Always use the **Context7 MCP** (`@mcp:context7:fumadocs`, library ID `/fuma-nama/fumadocs` or `/websites/fumadocs_dev`) via `resolve-library-id` and `query-docs` to query official Fumadocs documentation, conventions, and APIs.
