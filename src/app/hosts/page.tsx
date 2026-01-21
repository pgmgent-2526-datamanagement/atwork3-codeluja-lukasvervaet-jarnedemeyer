"use client";
import { useEffect, useState } from "react";
import { UsersIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Host } from "@/types/hosts/host.type";
import { HostsLoadingSkeleton } from "../../components/loaders/HostsLoadingSkeleton";
import { AddHostModal } from "@/components/modals/AddHostModal";
import { Trash } from "lucide-react";
import { DeleteModal } from "@/components/modals/DeleteModal";
import SearchBar from "@/components/SearchBar";
import { getHosts, deleteHost } from "@/utils/hosts/hosts.util";

export default function HostsPage() {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [hostToDelete, setHostToDelete] = useState<Host | null>(null);
  const hostsPerPage = 12;

  useEffect(() => {
    const loadHosts = async () => {
      try {
        const data = await getHosts();
        setHosts(data);
      } catch (error) {
        console.error("Error loading hosts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHosts();
  }, []);

  const handleSearchResults = (results: Host[]) => {
    setHosts(results);
    setCurrentPage(1); // Reset to first page when search results change
  };

  // Pagination logic
  const indexOfLastHost = currentPage * hostsPerPage;
  const indexOfFirstHost = indexOfLastHost - hostsPerPage;
  const currentHosts = hosts.slice(indexOfFirstHost, indexOfLastHost);
  const totalPages = Math.ceil(hosts.length / hostsPerPage);

  const handleAddHost = () => {
    setOpenAddModal(true);
  };

  if (loading) {
    return <HostsLoadingSkeleton />;
  }

  const openModal = (host: Host) => {
    setHostToDelete(host);
  };

  const closeModal = () => {
    setHostToDelete(null);
  };

  const handleDeleteHost = async (hostId: number) => {
    try {
      await deleteHost(hostId);
      setHosts((prevHosts) => prevHosts.filter((host) => host.id !== hostId));
    } catch (error) {
      console.error("Error deleting host:", error);
    }
  };

  return (
    <main className="bg-gray-50/50 p-3 sm:p-4 md:p-6 lg:p-10 pb-20 lg:pb-10 min-h-screen w-full lg:ml-64">
      <div className="w-full lg:min-h-full lg:pb-8">
        <div className="flex flex-col gap-3 lg:gap-4 mb-6 lg:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                Hostbeheer
              </h1>
              <p className="text-gray-500 mt-1 text-sm lg:text-base">
                Beheer je hosts en bekijk hun beschikbaarheid
              </p>
            </div>
            <button
              onClick={handleAddHost}
              className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04b3aa] transition-colors duration-300 shadow-md font-semibold w-full lg:w-auto"
            >
              <PlusIcon className="w-5 h-5" />
              Voeg Host Toe
            </button>
          </div>
          <div className="w-full lg:w-96">
            <SearchBar onSearch={handleSearchResults} />
          </div>
        </div>

        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Alle Hosts
          </h2>
          <span className="px-3 py-1 bg-white border rounded-full text-xs font-medium text-gray-500 shadow-sm">
            {hosts.length} totaal aantal hosts
          </span>
        </div>

        <div
          className={`fixed inset-0 bg-black/40 flex items-center justify-center z-1010 ${openAddModal ? "" : "hidden"}`}
        >
          <AddHostModal
            isOpen={openAddModal}
            onClose={() => setOpenAddModal(false)}
          />
        </div>

        {hosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
              {currentHosts.map((host) => (
                <div
                  key={host.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group min-h-fit lg:h-55 flex flex-col"
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
                          Actief
                        </span>
                      ) : (
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-gray-50 text-gray-600 px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap shrink-0">
                          Inactief
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

                    <div className="flex justify-between items-center mt-4 gap-4">
                      <a
                        href={`/hosts/${host.id}`}
                        className="flex-1 py-2.5 bg-[#05d8c8] cursor-pointer text-white text-sm font-semibold rounded-lg hover:bg-[#04b3aa] transition-colors duration-300 shadow-md text-center"
                      >
                        Bekijk Profiel
                      </a>
                      <button onClick={() => openModal(host)}>
                        <Trash className="text-red-500 cursor-pointer h-6 w-6 shrink-0" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 lg:mt-0 mb-4 lg:mb-0 bg-white border border-gray-200 lg:border-t rounded-lg lg:rounded-none shadow-sm lg:shadow-lg py-3 lg:py-4 px-2 lg:px-0 lg:fixed lg:bottom-0 lg:left-64 lg:right-0">
                <div className="flex justify-center items-center gap-1 sm:gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-[#05d8c8] hover:text-white hover:border-[#05d8c8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    Vorige
                  </button>
                  <div className="flex gap-1 sm:gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-2.5 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300 ${
                          currentPage === i + 1
                            ? "bg-[#05d8c8] text-white shadow-md"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-[#05d8c8] hover:text-white hover:border-[#05d8c8]"
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
                    className="px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-[#05d8c8] hover:text-white hover:border-[#05d8c8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    Volgende
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
            <UsersIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Geen hosts gevonden.</p>
          </div>
        )}
      </div>

      {hostToDelete && (
        <DeleteModal
          firstName={hostToDelete.firstName}
          lastName={hostToDelete.lastName}
          id={hostToDelete.id}
          onClose={closeModal}
          onDelete={handleDeleteHost}
        />
      )}

      {openAddModal && (
        <AddHostModal
          isOpen={openAddModal}
          onClose={() => setOpenAddModal(false)}
        />
      )}
    </main>
  );
}
