import React from 'react'
import { createPortal } from 'react-dom';

function SuccesModal({
  close,
  subject,
  action,
}: {
  close: () => void;
  subject: string;
  action: string;
}) {
  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={close}
      />

      <div className="relative bg-white w-full max-w-180 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300 ring-1 ring-slate-100">
        <div className="flex items-center justify-between px-8 py-5 bg-linear-to-r from-white to-slate-50 border-b">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Success!</h2>
            <p className="text-sm text-slate-500 mt-1">
              {subject} is succesvol {action}.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full p-4 justify-center">
          <button
            type="button"
            onClick={close}
            className="py-2 px-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default SuccesModal
