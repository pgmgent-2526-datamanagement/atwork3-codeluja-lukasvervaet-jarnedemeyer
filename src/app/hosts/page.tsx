"use client";
import { useEffect, useState } from "react";
import { UsersIcon, PlusIcon } from "@heroicons/react/24/outline";

type Host = {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  label: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function HostsPage() {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const hostsPerPage = 12;

  useEffect(() => {
    fetch("/api/hosts")
      .then((res) => res.json())
      .then((data) => {
        setHosts(data.hosts || data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hosts:", error);
        setLoading(false);
      });
  }, []);

  // Pagination logic
  const indexOfLastHost = currentPage * hostsPerPage;
  const indexOfFirstHost = indexOfLastHost - hostsPerPage;
  const currentHosts = hosts.slice(indexOfFirstHost, indexOfLastHost);
  const totalPages = Math.ceil(hosts.length / hostsPerPage);

  const handleAddHost = () => {
    // TODO: Implement add host logic
    alert("Add host functionality coming soon!");
  };

  if (loading) {
    return (
      <main className="fixed top-0 right-0 bottom-0 left-64 overflow-y-auto bg-gray-50/50 p-6 lg:p-10">
        <div className="w-full min-h-full">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="fixed top-0 right-0 bottom-0 left-64 overflow-y-auto bg-gray-50/50 p-6 lg:p-10 pb-24">
      <div className="w-full min-h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Staff Management
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your staff and view their availability
            </p>
          </div>
          <button
            onClick={handleAddHost}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
          >
            <PlusIcon className="w-5 h-5" />
            Add Host
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">All Staff Members</h2>
          <span className="px-3 py-1 bg-white border rounded-full text-xs font-medium text-gray-500 shadow-sm">
            {hosts.length} total hosts
          </span>
        </div>

        {hosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 min-h-[600px]">
              {currentHosts.map((host) => (
                <div
                  key={host.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group h-[220px] flex flex-col"
                >
                  {/* Colored Header */}
                  <div
                    className={`h-2 w-full ${
                      host.active
                        ? "bg-linear-to-r from-green-400 to-green-600"
                        : "bg-linear-to-r from-gray-300 to-gray-400"
                    }`}
                  />

                  <div className="p-5 flex flex-col flex-1">
                    {/* Header with Avatar Circle and Status */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${
                          host.active ? "bg-green-500" : "bg-gray-400"
                        }`}
                      >
                        {host.firstName.charAt(0)}
                        {host.lastName.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 truncate">
                          {host.firstName} {host.lastName}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          {host.status}
                        </p>
                      </div>
                      {host.active ? (
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200 whitespace-nowrap shrink-0">
                          Active
                        </span>
                      ) : (
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-gray-50 text-gray-600 px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap shrink-0">
                          Inactive
                        </span>
                      )}
                    </div>

                    {/* Label Section */}
                    <div className="flex-1">
                      {host.label && (
                        <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
                          <p className="text-xs text-blue-700 font-medium truncate">
                            {host.label}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer Button */}
                    <button className="mt-4 w-full py-2.5 bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 text-sm font-semibold rounded-lg group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-200 border border-blue-200 group-hover:border-blue-600">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed Pagination */}
            {totalPages > 1 && (
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-4">
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
            <UsersIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">No staff members found.</p>
          </div>
        )}
      </div>
    </main>
  );
}
