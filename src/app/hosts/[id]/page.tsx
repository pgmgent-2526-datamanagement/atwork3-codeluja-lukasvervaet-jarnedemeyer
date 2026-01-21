"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Host } from "@/types/hosts/host.type";
import BookingModal from "@/components/modals/BookingModal";
import { BookingHost } from "@/types/bookings/booking-host.type";
import { Booking } from "@/types/bookings/booking.type";
import { HostDetailLoadingSkeleton } from "../../../components/loaders/HostDetailLoadingSkeleton";
import { getHostById, updateHost } from "@/utils/hosts.util";
import { SquarePen } from "lucide-react";

interface HostWithBookings extends Host {
  bookingHosts: BookingHost[];
}

export default function HostDetailPage() {
  const { id } = useParams();
  const [host, setHost] = useState<HostWithBookings | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hostActive, setHostActive] = useState<boolean>(false);
  const [originalHostActive, setOriginalHostActive] = useState<boolean>(false);
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [originalFirstName, setOriginalFirstName] = useState<string>("");
  const [originalLastName, setOriginalLastName] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    if (host) {
      setFirstName(host.firstName);
      setLastName(host.lastName);
      setOriginalFirstName(host.firstName);
      setOriginalLastName(host.lastName);
      setHostActive(host.active);
      setOriginalHostActive(host.active);
    }
  }, [host]);

  const handleEditHost = async () => {
    if (!host) return;
    try {
      await updateHost({
        id: host.id,
        active: hostActive,
        firstName,
        lastName,
      });

      // Reset originals after save
      setOriginalFirstName(firstName);
      setOriginalLastName(lastName);
      setOriginalHostActive(hostActive);
      setEditName(false);

      router.push("/hosts");
    } catch (error) {
      console.error("Error updating host:", error);
    }
  };

  const fetchHostDetails = async (hostId: number) => {
    try {
      const data = await getHostById(hostId);

      const hostData = data.host || data;

      setHost(hostData);

      if (hostData && typeof hostData.active !== "undefined") {
        setHostActive(hostData.active);
      } else {
        setHostActive(false);
      }
    } catch (error) {
      console.error("Error fetching host details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHostDetails(Number(id));
  }, [id]);

  if (loading) {
    return <HostDetailLoadingSkeleton />;
  }

  if (!host) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg">Host niet gevonden.</div>
      </main>
    );
  }

  // Determine if there are unsaved changes
  const nameChanged =
    firstName !== originalFirstName || lastName !== originalLastName;
  const activeChanged = hostActive !== originalHostActive;
  const showSaveButton = nameChanged || activeChanged;

  return (
    <>
      <main className="bg-gray-50/50 min-h-screen pb-20 lg:pb-0 w-full lg:ml-64">
        <div className="p-2 md:p-4 lg:p-10 space-y-3 md:space-y-4 lg:space-y-6 w-full">
          {/* Back Button */}
          <button
            className="px-4 py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04c4b5] transition-colors duration-300 font-semibold"
            onClick={() => router.back()}
          >
            ← Terug
          </button>
          {showSaveButton && (
            <button
              className="px-4 py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04c4b5] transition-colors duration-300 font-semibold ml-4"
              onClick={handleEditHost}
            >
              Wijzigingen Opslaan
            </button>
          )}

          {/* Host Information Section */}
          <div className="bg-white rounded-lg lg:rounded-xl border border-gray-200 shadow-lg p-3 md:p-5 lg:p-8 w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 md:gap-4 lg:gap-8 w-full">
              <div
                className={`w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 rounded-full flex items-center justify-center text-white font-bold text-3xl md:text-4xl lg:text-5xl shadow-lg shrink-0 ${
                  hostActive ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                {host.firstName?.charAt(0)}
                {host.lastName?.charAt(0)}
              </div>

              <div className="flex-1 text-center lg:text-left w-full">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 lg:mb-3">
                  {editName ? (
                    <div className="flex items-center gap-2 md:gap-3">
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="px-2 md:px-3 py-1.5 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#05d8c8] focus:border-transparent text-sm md:text-base"
                        placeholder="First name"
                      />
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="px-2 md:px-3 py-1.5 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#05d8c8] focus:border-transparent text-sm md:text-base"
                        placeholder="Last name"
                      />
                      <button
                        onClick={() => {
                          setEditName(false);
                          // Do not reset firstName/lastName so unsaved changes are preserved
                        }}
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors text-xs md:text-sm font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900">
                        {host.firstName} {host.lastName}
                      </span>
                      <SquarePen
                        className="w-5 h-5 text-gray-500 hover:text-[#05d8c8] cursor-pointer transition-colors"
                        onClick={() => {
                          setEditName(true);
                        }}
                      />
                    </div>
                  )}
                </h1>
                <div className="flex gap-2 lg:gap-3 items-center flex-wrap justify-center lg:justify-start w-full">
                  <span className="text-xs lg:text-sm font-semibold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm">
                    {host.status}
                  </span>
                  {host.label && (
                    <span className="text-xs lg:text-sm font-semibold px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 shadow-sm">
                      {host.label}
                    </span>
                  )}
                  <button
                    type="button"
                    className="bg-none border-none cursor-pointer"
                    onClick={() => {
                      setHostActive(!hostActive);
                    }}
                  >
                    <span
                      className={`px-4 lg:px-5 py-1.5 lg:py-2 rounded-full font-semibold text-xs lg:text-sm shadow-sm transition-colors ${
                        hostActive
                          ? "bg-green-300 text-green-700"
                          : "bg-[#05d8c8] text-white"
                      }`}
                    >
                      {hostActive ? "Actief" : "Inactief"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="bg-white rounded-lg lg:rounded-xl border border-gray-200 shadow-lg p-3 md:p-5 lg:p-8 w-full">
            <div className="flex items-center justify-between mb-3 md:mb-4 lg:mb-6 pb-2 md:pb-3 lg:pb-4 border-b border-gray-200">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                Toegewezen Boekingen
              </h2>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-[#05d8c8] text-white rounded-full text-xs md:text-sm font-bold shrink-0">
                {host.bookingHosts?.length || 0}
              </span>
            </div>

            {!host.bookingHosts || host.bookingHosts.length === 0 ? (
              <div className="text-center py-10 md:py-12 lg:py-16 text-gray-400">
                <p className="text-sm md:text-base lg:text-lg">
                  Nog geen boekingen aan deze host toegewezen.
                </p>
              </div>
            ) : (
              <div className="space-y-3 md:space-y-4">
                {host.bookingHosts.map(({ booking }) => (
                  <div
                    key={booking.id}
                    className="border border-gray-200 rounded-lg lg:rounded-xl p-3 md:p-4 lg:p-6 hover:shadow-lg hover:border-[#05d8c8] transition-all duration-300 cursor-pointer bg-white w-full"
                    onClick={() => {
                      setSelectedBooking(booking);
                      setIsModalOpen(true);
                    }}
                  >
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-0 mb-3 lg:mb-4 w-full">
                      <div className="flex-1 w-full">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1">
                          {new Date(booking.bookingDate).toLocaleDateString(
                            "en-GB",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          {new Date(booking.startTime).toLocaleTimeString(
                            "nl-NL",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "UTC",
                            },
                          )}{" "}
                          -{" "}
                          {new Date(booking.endTime).toLocaleTimeString(
                            "nl-NL",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "UTC",
                            },
                          )}
                        </p>
                      </div>
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-[#05d8c8] text-white rounded-full text-xs md:text-sm font-bold shadow-md self-start lg:whitespace-nowrap">
                        {booking.playersCount} Spelers
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
                      {booking.packageName && (
                        <div className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-200 w-full">
                          <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Pakket
                          </p>
                          <p className="text-sm md:text-base font-bold text-gray-900">
                            {booking.packageName}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {isModalOpen && selectedBooking && (
        <BookingModal
          booking={selectedBooking}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
