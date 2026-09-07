import { Skeleton, ProjectSkeleton } from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Hero skeleton */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_320px] md:items-center">
        <div className="space-y-4">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-16 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-5/6" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
        <Skeleton className="h-[380px] w-full max-w-[320px] rounded" />
      </div>

      {/* Project skeleton */}
      <div className="space-y-6 pt-12">
        <Skeleton className="h-6 w-48" />
        <ProjectSkeleton />
      </div>
    </div>
  );
}
