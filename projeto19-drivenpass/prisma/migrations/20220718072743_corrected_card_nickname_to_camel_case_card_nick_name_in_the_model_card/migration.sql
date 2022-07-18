/*
  Warnings:

  - You are about to drop the column `cardNickname` on the `cards` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cardNickName]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cardNickName` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "cards_cardNickname_key";

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "cardNickname",
ADD COLUMN     "cardNickName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cards_cardNickName_key" ON "cards"("cardNickName");
