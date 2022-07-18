/*
  Warnings:

  - You are about to drop the column `tittle` on the `safeNotes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `safeNotes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `safeNotes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "safeNotes_tittle_key";

-- AlterTable
ALTER TABLE "safeNotes" DROP COLUMN "tittle",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "safeNotes_title_key" ON "safeNotes"("title");
