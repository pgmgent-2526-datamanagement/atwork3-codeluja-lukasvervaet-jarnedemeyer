-- DropForeignKey
ALTER TABLE "BookingHost" DROP CONSTRAINT "BookingHost_bookingId_fkey";

-- AddForeignKey
ALTER TABLE "BookingHost" ADD CONSTRAINT "BookingHost_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;
