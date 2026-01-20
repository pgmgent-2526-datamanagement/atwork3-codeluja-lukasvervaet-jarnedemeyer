import React from "react";
import { createPortal } from "react-dom";

function ErrorModal({
  close,
  subject,
  message,
}: {
  close: () => void;
  subject: string;
  message?: string;
}) {
  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={close}
      />

      <div className="relative bg-white w-full max-w-180 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300 ring-1 ring-slate-100">
        <div className="flex items-center justify-between px-8 py-5 bg-linear-to-r from-white to-slate-50 border-b border-red-200">
          <div>
            <h2 className="text-lg font-semibold text-red-600">Fout!</h2>
            <p className="text-sm text-slate-500 mt-1">
              {message || `Bijwerken van ${subject} is mislukt.`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full p-4 justify-center">
          <button
            type="button"
            onClick={close}
            className="py-2 px-4 bg-red-50 border border-red-200 text-red-700 font-medium rounded-lg hover:bg-red-100 transition"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ErrorModal;
