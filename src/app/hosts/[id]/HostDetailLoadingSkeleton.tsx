export default function HostDetailLoading() {
  return <HostDetailLoadingSkeleton />;
}

export function HostDetailLoadingSkeleton() {
  return (
    <main className="fixed top-0 right-0 bottom-0 left-64 bg-gray-50/50 overflow-y-auto">
      <div className="p-6 lg:p-10 space-y-6">
        {/* Back Button Skeleton */}
        <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>

        {/* Host Information Section Skeleton */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 animate-pulse">
          <div className="flex items-center gap-8">
            {/* Avatar Circle Skeleton */}
            <div className="w-32 h-32 rounded-full bg-gray-300 shrink-0"></div>

            <div className="flex-1 space-y-4">
              {/* Name Skeleton */}
              <div className="h-10 bg-gray-200 rounded-lg w-64"></div>

              {/* Tags Skeleton */}
              <div className="flex gap-3 items-center flex-wrap">
                <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Section Skeleton */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 animate-pulse">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <div className="h-8 bg-gray-200 rounded-lg w-48"></div>
            <div className="w-12 h-8 bg-gray-200 rounded-full"></div>
          </div>

          {/* Booking Cards Skeleton */}
          <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 bg-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 space-y-2">
                    <div className="h-7 bg-gray-200 rounded-lg w-3/4"></div>
                    <div className="h-5 bg-gray-200 rounded-lg w-1/2"></div>
                  </div>
                  <div className="h-8 w-28 bg-gray-200 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
