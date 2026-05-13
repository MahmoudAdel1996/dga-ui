---
description: "Analyze this repository and produce a comprehensive project purpose and development strategy brief"
name: "Project Strategy And Purpose"
argument-hint: "Optional focus, for example: release plan, onboarding, docs strategy, or component roadmap"
agent: "agent"
---
Create a comprehensive development strategy and project purpose brief for this repository.

Use the user argument as an optional focus area. If no argument is provided, cover the full project.

## Objectives
- Explain what this project is, who it serves, and why it exists.
- Describe how the project is built, organized, and shipped.
- Turn repository details into practical development strategy guidance.

## Required Context Gathering
Read key files before writing:
- `README.md`
- `package.json`
- `docs/README.md`
- `demo-angular/README.md`
- Any additional files needed to validate architecture, scripts, and release process.

## Output Requirements
Produce one report with the following sections in this exact order:

1. Project Purpose
- Core mission
- Primary users and use cases
- Product value proposition

2. Product Scope
- What is included in the deliverable package
- What is out of scope or intentionally delegated

3. Workspace Architecture
- High-level map of major folders
- Responsibilities of each major area (theme source, compiled assets, docs site, demo app)
- Dependency boundaries and integration points

4. Development Workflow
- Local development commands
- Build and watch flow
- Docs and demo workflows
- Recommended day-to-day loop for contributors

5. Styling and Design System Strategy
- Theme layering model
- How configuration, component overrides, and customizations interact
- Guidance for safe extension without breaking consistency

6. Quality, Versioning, and Release Strategy
- Current quality gates (format, tests, build)
- Observed release/version automation
- Recommended improvements for reliability

7. Risks and Gaps
- Technical, process, and documentation risks
- Missing tests, unclear ownership, or automation weaknesses
- Severity labels: High, Medium, Low

8. Prioritized Action Plan
- Short-term actions (next 1-2 weeks)
- Mid-term actions (next 1-2 months)
- Long-term actions (quarter)
- Include expected impact for each action

9. Contribution Guide Snapshot
- Fast onboarding checklist for a new contributor
- First safe change to make
- Validation commands to run before opening a PR

## Style Constraints
- Be specific and repository-grounded.
- Prefer concise, concrete statements over generic advice.
- Use bullet lists where useful.
- When stating key facts, cite source file paths.
- If information is missing, state assumptions explicitly.

## Focus Mode
If the user argument includes a focus area, still include all sections above, but add extra depth in the most relevant sections and call out tradeoffs for that focus.
