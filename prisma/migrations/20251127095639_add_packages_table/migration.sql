/*
  Warnings:

  - You are about to drop the `Bookings` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PackageCategory" AS ENUM ('VR', 'VR_BATTLE', 'KIDS', 'SCHOOL');

-- CreateEnum
CREATE TYPE "GroupType" AS ENUM ('NORMAL', 'LARGE_GROUP');

-- DropTable
DROP TABLE "Bookings";

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "playersCount" INTEGER NOT NULL,
    "hostsRequired" INTEGER NOT NULL,
    "food_required" BOOLEAN NOT NULL,
    "is_b2b" BOOLEAN NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "PackageCategory" NOT NULL,
    "groupType" "GroupType" NOT NULL,
    "playTimeMin" INTEGER NOT NULL,
    "visitDurationMin" INTEGER NOT NULL,
    "pricePerPlayer" DECIMAL(10,2) NOT NULL,
    "gameSelection" TEXT,
    "freeDrink" BOOLEAN NOT NULL DEFAULT false,
    "freeSupervisor" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);
