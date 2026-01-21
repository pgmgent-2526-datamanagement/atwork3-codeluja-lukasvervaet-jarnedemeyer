"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Plus } from "lucide-react";

import { Host, Status } from "@/types/host.type";
import { getHosts } from "@/utils/hosts.util";

interface AddHostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddHostModal: React.FC<AddHostModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ firstName: "", lastName: "", status: "" });
    await fetch("/api/hosts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        response.json();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding host:", error);
      });
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-180 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300 ring-1 ring-slate-100">
        <div className="flex items-center justify-between px-8 py-5 bg-linear-to-r from-white to-slate-50 border-b">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-[#05d8c8] to-[#04b3aa] flex items-center justify-center text-white shadow-md">
              <Plus />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Add Host</h3>
              <p className="text-sm text-slate-500">
                Create a host to assign to bookings
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close add host modal"
          >
            <XMarkIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="p-8 bg-white">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-xs font-semibold text-slate-600 mb-2"
                >
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border border-slate-200 p-3 rounded-lg w-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#05d8c8] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-slate-600 mb-2"
                >
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border border-slate-200 p-3 rounded-lg w-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#05d8c8] transition"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="status"
                className="block text-xs font-semibold text-slate-600 mb-2"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="border border-slate-200 p-3 rounded-lg w-full bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#05d8c8] transition"
              >
                <option value="">Select status</option>
                <option value="MEDEWERKER">Medewerker</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
          </div>

          <div className="p-6 bg-slate-50 flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              Hosts will be available immediately after creation.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-6 bg-[#05d8c8] text-white font-semibold rounded-lg shadow-md hover:bg-[#04b3a9] transition"
              >
                Add host
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};
