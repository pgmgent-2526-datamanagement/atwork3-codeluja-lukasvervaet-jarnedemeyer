"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Host } from "@/types/host.type";
import BookingModal from "@/components/BookingModal";
import { BookingHost } from "@/types/booking-host.type";
import { Booking } from "@/types/booking.type";
import { HostDetailLoadingSkeleton } from "./HostDetailLoadingSkeleton";
import { getHostById } from "@/utils/hosts.util";

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
  const router = useRouter();

  const handleEditHost = async () => {
    if (!host) return;
    try {
      const response = await fetch(`/api/hosts/edit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: host.id, active: hostActive }),
      });

      if (response.ok) {
        router.push("/hosts");
      }
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
        <div className="text-red-500 text-lg">Host not found.</div>
      </main>
    );
  }

  return (
    <>
      <main className="lg:fixed lg:top-0 lg:right-0 lg:bottom-0 lg:left-64 bg-gray-50/50 lg:overflow-y-auto min-h-screen lg:min-h-0 pb-20 lg:pb-0 w-full">
        <div className="p-2 md:p-4 lg:p-10 space-y-3 md:space-y-4 lg:space-y-6 w-full">
          {/* Back Button */}
          <div className="flex gap-2 lg:gap-0 w-full">
            <button
              className="flex-1 lg:flex-none px-3 lg:px-4 py-2.5 lg:py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04c4b5] transition-colors duration-300 font-semibold text-sm md:text-base"
              onClick={() => router.back()}
            >
              ← Back
            </button>
            <button
              className="flex-1 lg:flex-none px-3 lg:px-4 py-2.5 lg:py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04c4b5] transition-colors duration-300 font-semibold text-sm md:text-base lg:ml-4"
              onClick={handleEditHost}
            >
              Save Changes
            </button>
          </div>

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
                  {host.firstName} {host.lastName}
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
                    onClick={() => setHostActive(!hostActive)}
                  >
                    <span
                      className={`px-4 lg:px-5 py-1.5 lg:py-2 rounded-full font-semibold text-xs lg:text-sm shadow-sm transition-colors ${
                        hostActive
                          ? "bg-green-300 text-green-700"
                          : "bg-[#05d8c8] text-white"
                      }`}
                    >
                      {hostActive ? "Active" : "Inactive"}
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
                Assigned Bookings
              </h2>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-[#05d8c8] text-white rounded-full text-xs md:text-sm font-bold shrink-0">
                {host.bookingHosts?.length || 0}
              </span>
            </div>

            {!host.bookingHosts || host.bookingHosts.length === 0 ? (
              <div className="text-center py-10 md:py-12 lg:py-16 text-gray-400">
                <p className="text-sm md:text-base lg:text-lg">
                  No bookings assigned to this host yet.
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
                        {booking.playersCount} Players
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
                      {booking.packageName && (
                        <div className="bg-gray-50 rounded-lg p-3 md:p-4 border border-gray-200 w-full">
                          <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Package
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
