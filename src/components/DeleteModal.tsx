import React from 'react';
import { createPortal } from 'react-dom';

interface DeleteModalProps {
  firstName: string;
  lastName: string;
  id: number;
  onClose: () => void;
  onDelete: (id: number) => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  firstName,
  lastName,
  id,
  onClose,
  onDelete,
}) => {
  const handleConfirmDelete = () => {
    onDelete(id);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-9999">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
        <p className="mb-4">
          Are you sure you want to delete{" "}
          <strong>
            {firstName} {lastName}
          </strong>
          ?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};