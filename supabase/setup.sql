-- Run once in the Supabase SQL Editor for your project.
-- Creates one row of saved progress per signed-in user and locks it down so
-- each user can read and write only their own row.

create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

drop policy if exists "Users read own progress"   on public.progress;
drop policy if exists "Users insert own progress" on public.progress;
drop policy if exists "Users update own progress" on public.progress;

create policy "Users read own progress" on public.progress
  for select to authenticated using (auth.uid() = user_id);

create policy "Users insert own progress" on public.progress
  for insert to authenticated with check (auth.uid() = user_id);

create policy "Users update own progress" on public.progress
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
