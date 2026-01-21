export default function NavSkeletonLoader() {
  return (
    <aside className="hidden lg:block fixed left-0 top-0 w-64 h-screen border-r border-gray-100 bg-white shadow-md z-50">
      <div className="flex justify-center items-center m-auto mt-2 h-25">
        <div className="w-25 h-25 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      <div className="sticky top-6 px-5 py-6 space-y-8 flex flex-col justify-between max-h-[90%] h-full">
        <div>
          <div className="h-3 bg-gray-200 rounded w-20 mb-3 animate-pulse"></div>
          <nav className="space-y-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2">
                <div className="w-4.5 h-4.5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
            ))}
          </nav>
        </div>
        <div>
          <div className="h-3 bg-gray-200 rounded w-24 mb-3 animate-pulse"></div>
          <nav className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-4.5 h-4.5 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
}
