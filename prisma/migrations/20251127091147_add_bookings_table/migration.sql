-- CreateTable
CREATE TABLE "Bookings" (
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

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);
