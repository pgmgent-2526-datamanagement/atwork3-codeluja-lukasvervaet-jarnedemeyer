import { SkeletonStatsCard, SkeletonLargeCard } from "@/components/Loader";

export default function Loading() {
  return (
    <main className="min-h-screen p-8 md:p-10 lg:p-12">
      <div className="mb-8">
        <div className="animate-pulse bg-gray-100 h-7 w-52 rounded-md" />
        <div className="animate-pulse bg-gray-100 h-4 w-80 mt-2 rounded-md" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <SkeletonStatsCard />
          <SkeletonStatsCard />
          <SkeletonStatsCard />
          <SkeletonStatsCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SkeletonLargeCard />
          <SkeletonLargeCard />
        </div>
      </div>
    </main>
  );
}
