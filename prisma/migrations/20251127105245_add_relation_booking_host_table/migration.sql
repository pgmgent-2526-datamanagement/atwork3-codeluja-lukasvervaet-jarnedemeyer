-- CreateTable
CREATE TABLE "BookingHost" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "hostId" INTEGER NOT NULL,

    CONSTRAINT "BookingHost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingHost" ADD CONSTRAINT "BookingHost_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingHost" ADD CONSTRAINT "BookingHost_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
