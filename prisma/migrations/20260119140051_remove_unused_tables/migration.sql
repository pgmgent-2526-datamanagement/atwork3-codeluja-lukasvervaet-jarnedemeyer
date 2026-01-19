/*
  Warnings:

  - You are about to drop the column `customerId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `BookingFoodItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Package` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShiftRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_customerId_fkey";

-- DropForeignKey
ALTER TABLE "BookingFoodItem" DROP CONSTRAINT "BookingFoodItem_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "BookingFoodItem" DROP CONSTRAINT "BookingFoodItem_foodItemId_fkey";

-- DropForeignKey
ALTER TABLE "Shift" DROP CONSTRAINT "Shift_hostId_fkey";

-- DropForeignKey
ALTER TABLE "Shift" DROP CONSTRAINT "Shift_roleId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "customerId";

-- DropTable
DROP TABLE "BookingFoodItem";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "FoodItem";

-- DropTable
DROP TABLE "Package";

-- DropTable
DROP TABLE "Shift";

-- DropTable
DROP TABLE "ShiftRole";

-- DropEnum
DROP TYPE "GroupType";

-- DropEnum
DROP TYPE "PackageCategory";
