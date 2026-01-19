import React, { useState } from 'react';

interface Host {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface AddHostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (host: Host) => void;
}

export const AddHostModal: React.FC<AddHostModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: Date.now().toString(),
      ...formData,
    });
    setFormData({ firstName: '', lastName: '', status: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-md border-2 border-[#05d8c8] p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Add Host</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="firstname" className="underline">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-2 border-[#05d8c8] p-2 rounded-md shadow-md w-full"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="underline">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-2 border-[#05d8c8] p-2 rounded-md shadow-md w-full"
            />
          </div>

          <div>
            <label htmlFor="status" className="underline">
              Status
            </label>
            <input
              id="status"
              type="number"
              name="status"
              placeholder="Status"
              value={formData.status}
              onChange={handleChange}
              required
              className="border-2 border-[#05d8c8] p-2 rounded-md shadow-md w-full"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="h-10 cursor-pointer flex justify-center items-center bg-white text-sm text-[#05d8c8] font-semibold py-2 px-4 rounded-md shadow-sm border-2 border-[#05d8c8] hover:bg-[#f8fffe] transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-10 cursor-pointer flex justify-center items-center bg-[#05d8c8] text-sm text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#04b3aa] transition-colors duration-300"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};