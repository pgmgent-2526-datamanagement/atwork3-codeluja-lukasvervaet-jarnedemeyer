import { SkeletonStatsCard } from "./Loader";

export default function HomeLoader() {
  return (
    <div className="fixed inset-0 z-9999 bg-gray-50/80 flex items-start justify-center overflow-y-auto">
      <main className="min-h-screen w-full max-w-7xl p-3 sm:p-4 md:p-6 lg:p-10 pb-20 lg:pb-10">
        <div className="w-full">
          <div className="flex flex-col gap-3 mb-6 md:mb-10">
            <div>
              <div className="animate-pulse bg-gray-200 h-8 w-48 rounded-md mb-2" />
              <div className="animate-pulse bg-gray-100 h-4 w-64 rounded-md" />
            </div>
            <div className="animate-pulse bg-gray-100 h-10 w-40 rounded-md mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-10">
            <SkeletonStatsCard />
            <SkeletonStatsCard />
            <SkeletonStatsCard />
          </div>

          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="animate-pulse bg-gray-200 h-6 w-40 rounded-md" />
            <div className="animate-pulse bg-gray-100 h-6 w-32 rounded-md" />
          </div>

          <div className="max-h-150 overflow-y-auto rounded-xl border border-gray-200 lg:border-2 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 lg:p-6">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 sm:p-5 min-h-30 flex flex-col gap-3 animate-pulse"
                >
                  <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
                  <div className="h-3 w-32 bg-gray-100 rounded mb-1" />
                  <div className="h-3 w-20 bg-gray-100 rounded" />
                  <div className="h-8 w-full bg-gray-50 rounded mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
