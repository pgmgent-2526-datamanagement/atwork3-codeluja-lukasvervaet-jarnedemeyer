"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Host } from "@/types/host.type";

export default function HostDetailPage() {
  const { id } = useParams();
  const [host, setHost] = useState<Host | null>(null);
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
    <main className="min-h-screen bg-gray-50/50 p-6 lg:p-10 flex flex-col items-center">
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 w-full max-w-xl flex flex-col items-center">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4 ${
            host.active ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          {host.firstName.charAt(0)}
          {host.lastName.charAt(0)}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          {host.firstName} {host.lastName}
        </h1>
        <span className="text-sm font-semibold px-3 py-1 rounded-full mb-2 border border-gray-200 bg-gray-50 text-gray-700">
          {host.status}
        </span>
        {host.label && (
          <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 mb-2">
            <p className="text-xs text-blue-700 font-medium truncate">
              {host.label}
            </p>
          </div>
        )}
        <div className="flex gap-4 mt-4">
          <span
            className={`px-4 py-2 rounded-lg font-semibold text-sm ${
              host.active
                ? "bg-[#05d8c8] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {host.active ? "Active" : "Inactive"}
          </span>
        </div>
        <button
          className="mt-8 px-6 py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04b3aa] transition-colors duration-300 shadow-md font-semibold"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </main>
  );
}
