-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "cost" DROP NOT NULL,
ALTER COLUMN "cost" SET DEFAULT 0;