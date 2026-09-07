export default function BlogLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-6">
        <div className="h-4 w-28 rounded bg-slate-200 dark:bg-zinc-800" />
        <div className="h-9 w-2/3 rounded bg-slate-200 dark:bg-zinc-800" />
        <div className="space-y-3 pt-4">
          <div className="h-4 w-full rounded bg-slate-200 dark:bg-zinc-800" />
          <div className="h-4 w-full rounded bg-slate-200 dark:bg-zinc-800" />
          <div className="h-4 w-4/5 rounded bg-slate-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
