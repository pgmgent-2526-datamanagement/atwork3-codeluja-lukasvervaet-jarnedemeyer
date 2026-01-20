import { Booking } from "./booking.type";
import { Host } from "./host.type";
export interface ModalProps {
  booking: Booking | null;
  onClose: () => void;
  onHostsChanged?: (bookingId: number, updatedHosts: { host: Host }[]) => void;
}
