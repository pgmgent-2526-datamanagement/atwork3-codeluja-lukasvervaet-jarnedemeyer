-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "bookingDescription" TEXT,
ADD COLUMN     "customerId" INTEGER,
ADD COLUMN     "dayOfWeek" TEXT,
ADD COLUMN     "eposFamily" TEXT,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "venue" TEXT,
ALTER COLUMN "food_required" SET DEFAULT false,
ALTER COLUMN "is_b2b" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Shift" ADD COLUMN     "hostId" INTEGER,
ADD COLUMN     "roleId" INTEGER;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ShiftRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
