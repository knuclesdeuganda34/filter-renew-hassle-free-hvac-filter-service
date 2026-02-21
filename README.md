# Cloudflare Workers Full-Stack Chat Demo

[cloudflarebutton]

A production-ready full-stack application template built on Cloudflare Workers, featuring a React frontend with Shadcn UI and a Hono backend powered by Durable Objects for scalable, multi-tenant state management. Demonstrates real-time chat boards with users, indexed listings, and seamless local development/deploy.

## Features

- **Full-Stack TypeScript**: Shared types between frontend (`src`) and Worker (`worker`).
- **Durable Objects for Entities**: Global storage for Users and ChatBoards with automatic indexing for pagination.
- **Reactive Frontend**: TanStack Query for data fetching/mutations, React Router, and immersive UI with Tailwind + Shadcn.
- **API-First Backend**: Hono routes for CRUD operations on users, chats, and messages.
- **Zero-Cold-Start Architecture**: SQLite-backed Durable Objects for instant persistence.
- **Local Development**: Vite dev server with hot reload, Wrangler integration.
- **Production Deploy**: One-command deployment to Cloudflare Workers with SPA asset handling.
- **Dark Mode & Responsive**: Theme-aware UI with mobile support.
- **Error Handling**: Client/server error reporting, Query error boundaries.

## Tech Stack

- **Frontend**: React 18, Vite, TanStack Query, React Router, Shadcn/UI, Tailwind CSS, Lucide Icons, Framer Motion, Sonner (toasts).
- **Backend**: Cloudflare Workers, Hono, Durable Objects (GlobalDurableObject), TypeScript.
- **State & Data**: IndexedEntity pattern for listings, Immer for mutations.
- **Dev Tools**: Bun (package manager), Wrangler, ESLint, TypeScript 5.
- **UI/UX**: Radix UI primitives, Tailwind Animate, Glassmorphism effects.

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended package manager)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) (for deployment)
- Cloudflare account (free tier sufficient)

### Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   bun install
   ```

3. (Optional) Generate Worker types:

   ```bash
   bun run cf-typegen
   ```

### Local Development

Start the development server:

```bash
bun dev
```

- Frontend: http://localhost:3000 (Vite HMR)
- Backend APIs: http://localhost:3000/api/*
- Seed data auto-loads on first API call.

Hot reload works for both frontend and Worker routes (edit `worker/user-routes.ts`).

### Build for Production

```bash
bun run build
```

Outputs static assets to `dist/` for Worker integration.

## Usage

### Frontend

- Navigate to `/` for the demo home (customize `src/pages/HomePage.tsx`).
- Use `AppLayout` for sidebar layouts (`src/components/layout/AppLayout.tsx`).
- API integration via `api()` helper (`src/lib/api-client.ts`).

Example query (with TanStack Query):

```tsx
const { data: users } = useQuery({
  queryKey: ['users'],
  queryFn: () => api<User[]>('/api/users'),
});
```

### Backend APIs

All routes under `/api/` with JSON responses `{ success: boolean; data?: T; error?: string }`.

#### Users
- `GET /api/users?cursor=&limit=10` - Paginated list
- `POST /api/users` - `{ name: string }`
- `DELETE /api/users/:id`
- `POST /api/users/deleteMany` - `{ ids: string[] }`

#### Chats
- `GET /api/chats?cursor=&limit=10` - Paginated list
- `POST /api/chats` - `{ title: string }`
- `DELETE /api/chats/:id`
- `POST /api/chats/deleteMany` - `{ ids: string[] }`

#### Messages
- `GET /api/chats/:chatId/messages`
- `POST /api/chats/:chatId/messages` - `{ userId: string; text: string }`

Test with `curl` or browser:

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Alice"}'
```

**Custom Routes**: Extend in `worker/user-routes.ts`. Changes hot-reload in dev.

## Deployment

Deploy to Cloudflare Workers:

1. Login: `wrangler login`
2. (Optional) Set secrets: `wrangler secret put YOUR_SECRET`
3. Deploy:

   ```bash
   bun run deploy
   ```

Your app will be live at `https://your-worker.your-subdomain.workers.dev`.

[cloudflarebutton]

**Custom Domain**: Update `wrangler.jsonc` and run `wrangler deploy`.

## Project Structure

```
├── src/              # React frontend (Vite)
├── worker/           # Hono + Durable Objects backend
│   ├── core-utils.ts # Entity base classes (DO NOT MODIFY)
│   ├── entities.ts   # UserEntity, ChatBoardEntity
│   └── user-routes.ts # Add your API routes here
├── shared/           # Shared types + mocks
├── dist/             # Built assets (gitignored)
└── wrangler.jsonc    # Worker config (DO NOT MODIFY)
```

## Customization

1. **Add Entities**: Extend `IndexedEntity` in `worker/entities.ts`.
2. **New Routes**: `worker/user-routes.ts` (auto-imported).
3. **Pages/UI**: `src/pages/`, `src/components/`.
4. **Theme**: Edit `tailwind.config.js` / `src/index.css`.
5. **Seed Data**: `shared/mock-data.ts`.

## Contributing

1. Fork & clone.
2. `bun install && bun dev`.
3. Make changes, test APIs/UI.
4. Commit: `git commit -m "feat: add X"`.
5. PR to main.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- Issues: GitHub repo.

Built with ❤️ for Cloudflare Developers.