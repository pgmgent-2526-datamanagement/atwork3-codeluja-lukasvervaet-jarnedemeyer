// Define the Modal component structure (inside the same file for simplicity)

interface Booking {
  id: number;
  playersCount: number;
  startTime: string;
  endTime: string;
  bookingDate: string;
  bookingDescription: string;
  hostsRequired: number;
  food_required: boolean;
  is_b2b: boolean;
  packageName: string;
  notes: string;
  status: string;
}

interface ModalProps {
  booking: Booking | null;
  onClose: () => void;
}

const BookingModal: React.FC<ModalProps> = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    // Simple fixed overlay for the modal
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">
          {booking.packageName}
        </h2>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {new Date(booking.bookingDate).toLocaleDateString("nl-NL")}
          </p>
          <p>
            <span className="font-semibold">Time:</span>{" "}
            {new Date(booking.startTime).toLocaleTimeString("nl-NL", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(booking.endTime).toLocaleTimeString("nl-NL", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>
            <span className="font-semibold">Players:</span>{" "}
            {booking.playersCount}
          </p>
          <p>
            <span className="font-semibold">Hosts Required:</span>{" "}
            {booking.hostsRequired}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {booking.status}
          </p>
          {booking.bookingDescription && (
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {booking.bookingDescription}
            </p>
          )}
          {booking.notes && (
            <p>
              <span className="font-semibold">Notes:</span> {booking.notes}
            </p>
          )}

          {booking.food_required !== undefined && (
            <p>
              <span className="font-semibold">Food Required:</span>
              {booking.food_required ? "Yes" : "No"}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
