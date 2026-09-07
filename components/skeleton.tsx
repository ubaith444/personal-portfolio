import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-[--border] opacity-70",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

export function ProjectSkeleton() {
  return (
    <div className="rounded border border-[--border] bg-[--surface] p-6 sm:p-8 space-y-4" aria-busy="true">
      <div className="flex justify-between items-start">
        <div className="space-y-2 w-2/3">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
      <Skeleton className="h-16 w-full" />
      <div className="flex flex-wrap gap-2 pt-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  );
}

export function TechItemSkeleton() {
  return (
    <div className="flex items-center gap-3 py-1.5" aria-busy="true">
      <Skeleton className="h-5 w-5 rounded" />
      <Skeleton className="h-4 w-28" />
    </div>
  );
}
