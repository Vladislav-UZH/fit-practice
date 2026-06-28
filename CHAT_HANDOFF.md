# Clean Chat Handoff

Paste the prompt below into a new ChatGPT or Codex conversation with GitHub access.

```text
@GitHub inspect https://github.com/Vladislav-UZH/fit-practice

This is a clean conversation. Do not rely on context from earlier chats.

Before proposing or making changes:

1. Inspect the repository and current default branch.
2. Read AGENTS.md completely.
3. Read PROJECT_CONTEXT.md completely.
4. Read CURRENT_STATE.md completely.
5. Read README.md.
6. Inspect all three skills under .agents/skills:
   - maxibud-energy-site
   - nuxt4-production
   - maxibud-release-check
7. Read each SKILL.md and agents/openai.yaml.
8. Read only the references relevant to the next task.
9. Inspect package.json, lockfile, Nuxt configuration, application
   structure, tests, CI, and open pull requests when they exist.
10. Treat repository contents and installed package types as the source
    of truth.

Project identity:

- Educational bilingual Nuxt 4 product showcase.
- Fictional MAXIBUD ENERGY product line.
- Products:
  - MAXIBUD PowerBox 2400
  - MAXIBUD HomeCore 5
  - MAXIBUD SiteHub 10
- Products must not be presented as certified, commercially available,
  independently tested, patented, or used by real customers.

Skill responsibilities:

- AGENTS.md: permanent repository rules.
- maxibud-energy-site: product, UX, design, content, localization, and
  disclosures.
- nuxt4-production: Nuxt architecture, SSR, Nitro, Content, i18n, UI,
  testing, security, performance, and deployment.
- maxibud-release-check: explicit final audit only.

Required first response:

Return a concise repository reconstruction containing:

1. current branch and latest visible repository state;
2. instruction and skill files detected;
3. current application implementation status;
4. whether PROJECT_CONTEXT.md and CURRENT_STATE.md match the code;
5. whether the content-audit scope fix is present;
6. missing or contradictory files;
7. exact validation that can currently run;
8. recommended next implementation milestone;
9. assumptions that remain unverified.

Do not modify files in the first response.
Do not generate application code in the first response.
Wait for the next concrete implementation instruction after the
reconstruction.
```

## Follow-up Prompt for Foundation Work

```text
Use $maxibud-energy-site and $nuxt4-production.

Implement the next milestone recorded in CURRENT_STATE.md.

Before editing, inspect installed versions and current files. Make the
smallest complete change, preserve unrelated work, run every applicable
check, and update CURRENT_STATE.md with exact results.

Do not invoke $maxibud-release-check unless a full final audit is
explicitly requested.
```

Update this handoff only when the repository-loading sequence or skill composition changes. Update implementation progress in `CURRENT_STATE.md`, not here.
