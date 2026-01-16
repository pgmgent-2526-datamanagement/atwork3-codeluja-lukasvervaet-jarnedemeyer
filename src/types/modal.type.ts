import { Booking } from "./booking.type";
export interface ModalProps {
  booking: Booking | null;
  onClose: () => void;
}
