-- CreateEnum
CREATE TYPE "HostStatus" AS ENUM ('MEDEWERKER', 'STUDENT');

-- CreateEnum
CREATE TYPE "HostLabel" AS ENUM ('EXPERIENCED', 'TRAINING');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_role_id_fkey";

-- AlterTable
ALTER TABLE "Host" ADD COLUMN     "label" "HostLabel",
ADD COLUMN     "status" "HostStatus" NOT NULL DEFAULT 'STUDENT';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "UserRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;
