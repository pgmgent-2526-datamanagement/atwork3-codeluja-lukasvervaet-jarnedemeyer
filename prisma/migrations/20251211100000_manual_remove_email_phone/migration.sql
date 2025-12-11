-- DropIndex
DROP INDEX IF EXISTS "Host_email_key";

-- AlterTable
ALTER TABLE "Host" DROP COLUMN IF EXISTS "email",
DROP COLUMN IF EXISTS "phone";
