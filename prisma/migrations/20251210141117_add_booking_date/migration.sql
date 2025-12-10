/*
  Warnings:

  - Added the required column `bookingDate` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- Step 1: Add column as nullable first
ALTER TABLE "Booking" ADD COLUMN "bookingDate" TIMESTAMP(3);

-- Step 2: Populate bookingDate from startTime (extract date only)
UPDATE "Booking" SET "bookingDate" = DATE_TRUNC('day', "startTime");

-- Step 3: Make it required
ALTER TABLE "Booking" ALTER COLUMN "bookingDate" SET NOT NULL;
