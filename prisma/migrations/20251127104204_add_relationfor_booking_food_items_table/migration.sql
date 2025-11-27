-- CreateTable
CREATE TABLE "BookingFoodItem" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "foodItemId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "BookingFoodItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingFoodItem" ADD CONSTRAINT "BookingFoodItem_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingFoodItem" ADD CONSTRAINT "BookingFoodItem_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
