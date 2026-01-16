"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Host } from "@/types/host.type";
import BookingModal from "@/components/BookingModal";
import { BookingHost } from "@/types/booking-host.type";
import { Booking } from "@/types/booking.type";

interface HostWithBookings extends Host {
  bookingHosts: BookingHost[];
}

export default function HostDetailPage() {
  const { id } = useParams();
  const [host, setHost] = useState<HostWithBookings | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    fetch(`/api/hosts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHost(data);
      });
  }, [id]);

  if (!host) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg">Host not found.</div>
      </main>
    );
  }

  return (
    <>
      <main className="fixed top-0 right-0 bottom-0 left-64 bg-gray-50/50 overflow-y-auto">
        <div className="p-6 lg:p-10 space-y-6">
          {/* Back Button */}
          <button
            className="px-4 py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04c4b5] transition-colors duration-300 font-semibold"
            onClick={() => router.back()}
          >
            ← Back
          </button>

          {/* Host Information Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8">
            <div className="flex items-center gap-8">
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-5xl shadow-lg ${
                  host.active ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                {host.firstName.charAt(0)}
                {host.lastName.charAt(0)}
              </div>

              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {host.firstName} {host.lastName}
                </h1>
                <div className="flex gap-3 items-center flex-wrap">
                  <span className="text-sm font-semibold px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm">
                    {host.status}
                  </span>
                  {host.label && (
                    <span className="text-sm font-semibold px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 shadow-sm">
                      {host.label}
                    </span>
                  )}
                  <span
                    className={`px-5 py-2 rounded-full font-semibold text-sm shadow-sm ${
                      host.active
                        ? "bg-[#05d8c8] text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {host.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Assigned Bookings
              </h2>
              <span className="px-4 py-2 bg-[#05d8c8] text-white rounded-full text-sm font-bold">
                {host.bookingHosts.length}
              </span>
            </div>

            {host.bookingHosts.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <p className="text-lg">
                  No bookings assigned to this host yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {host.bookingHosts.map(({ booking }) => (
                  <div
                    key={booking.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#05d8c8] transition-all duration-300 cursor-pointer bg-white"
                    onClick={() => {
                      setSelectedBooking(booking);
                      setIsModalOpen(true);
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {new Date(booking.bookingDate).toLocaleDateString(
                            "en-GB",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {new Date(booking.startTime).toLocaleTimeString(
                            "nl-NL",
                            { hour: "2-digit", minute: "2-digit" }
                          )}{" "}
                          -{" "}
                          {new Date(booking.endTime).toLocaleTimeString(
                            "nl-NL",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-[#05d8c8] text-white rounded-full text-sm font-bold shadow-md">
                        {booking.playersCount} Players
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {booking.packageName && (
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Package
                          </p>
                          <p className="text-base font-bold text-gray-900">
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
