export default function ProjectLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-6">
        <div className="h-4 w-32 rounded bg-slate-200 dark:bg-zinc-800" />
        <div className="h-10 w-3/4 rounded bg-slate-200 dark:bg-zinc-800" />
        <div className="h-5 w-1/2 rounded bg-slate-200 dark:bg-zinc-800" />
        <div className="h-64 rounded-lg border border-slate-200 bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900/40" />
      </div>
    </div>
  );
}
