# Orbit — finance dashboard

A Next.js + Tailwind dashboard with real Supabase authentication, styled after
the "Tern" dashboard concept (sage/forest green, big hero cash figure, account
breakdown, cash forecast, upcoming payments, spend breakdown).

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create a Supabase project**

   Go to [supabase.com](https://supabase.com), create a free project, then
   open **Project Settings → API** and copy the Project URL and anon public
   key.

3. **Set environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

4. **Enable email auth** (on by default in Supabase: Authentication →
   Providers → Email). For local testing, turn off "Confirm email" in
   Authentication → Settings so you can sign up and log in immediately.

5. **Run the app**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000`. You'll be redirected to `/login`. Use
   `/signup` to create a real account — there is no hardcoded login; every
   session is a real Supabase-authenticated user.

## Structure

- `app/login`, `app/signup` — real auth forms wired to Supabase
- `app/dashboard` — the main dashboard UI (protected by `middleware.ts`)
- `lib/supabase/client.ts` / `server.ts` — Supabase client helpers
- `middleware.ts` — redirects signed-out users away from `/dashboard` and
  signed-in users away from `/login` and `/signup`

## Wiring up real data

The dashboard currently renders the account balances, forecast, payments and
spend breakdown as sample data (see the constants at the top of
`app/dashboard/page.tsx`) so the UI is easy to preview. To make it live:

1. Create tables in Supabase (e.g. `accounts`, `transactions`, `payments`)
   scoped to the signed-in user with row-level security.
2. Replace the sample arrays with a `supabase.from(...).select()` call,
   either in a server component or via `useEffect` in the client component.

## Notes on the design

Palette, type and layout follow the "Tern" dashboard reference: sage-green
hero panel, dark forest-green accent cards, a single lime highlight color,
and a frosted "Accounts" card floating over the hero. Swap the tokens in
`tailwind.config.js` (`sage`, `forest`, `lime`) to retheme it.
