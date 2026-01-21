export function HostsLoadingSkeleton() {
  return (
    <main className="fixed top-0 right-0 bottom-20 left-64 overflow-y-auto bg-gray-50/50 p-6 lg:p-10">
      <div className="w-full min-h-full pb-8">
        {/* Header Section Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 animate-pulse">
          <div className="flex-1">
            <div className="h-9 bg-gray-200 rounded-lg w-64 mb-2"></div>
            <div className="h-5 bg-gray-200 rounded-lg w-80"></div>
          </div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Stats Bar Skeleton */}
        <div className="mb-6 flex items-center justify-between animate-pulse">
          <div className="h-7 bg-gray-200 rounded-lg w-48"></div>
          <div className="h-7 w-28 bg-gray-200 rounded-full"></div>
        </div>

        {/* Host Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-150">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-55 flex flex-col animate-pulse"
            >
              {/* Colored Header */}
              <div className="h-2 w-full bg-gray-300" />

              <div className="p-5 flex flex-col flex-1">
                {/* Header with Avatar Circle and Status */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0"></div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full shrink-0"></div>
                </div>

                {/* Label Section */}
                <div className="flex-1">
                  <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>

                {/* Footer Button */}
                <div className="mt-4 w-full h-10 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
