import { Booking } from "../bookings/booking.type";
import { Host } from "../hosts/host.type";
export interface ModalProps {
  booking: Booking | null;
  onClose: () => void;
  onHostsChanged?: (bookingId: number, updatedHosts: { host: Host }[]) => void;
}
