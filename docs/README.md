# SDGA UI Documentation

Interactive documentation and component showcase for **[SDGA UI](https://github.com/MahmoudAdel1996/dga-ui)** — Government-Style Bootstrap Theme. Built with Next.js and [Fumadocs](https://fumadocs.dev).

- 🚀 **Live Site (Vercel):** **[https://dga-ui-six.vercel.app/](https://dga-ui-six.vercel.app/)**
- 🏛️ **GitHub Pages Showcase:** **[https://mahmoudadel1996.github.io/dga-ui/](https://mahmoudadel1996.github.io/dga-ui/)**

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs

---

## 👤 Author

Created and maintained by **[Mahmoud Adel](https://github.com/MahmoudAdel1996)** ([@MahmoudAdel1996](https://github.com/MahmoudAdel1996)).

## 📄 License

MIT License — see [LICENSE](../LICENSE) for details.
