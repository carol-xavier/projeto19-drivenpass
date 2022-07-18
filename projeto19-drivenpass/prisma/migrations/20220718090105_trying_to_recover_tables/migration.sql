/*
  Warnings:

  - A unique constraint covering the columns `[wifiNickname]` on the table `wifiPasswords` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "wifiPasswords_wifiNickname_key" ON "wifiPasswords"("wifiNickname");
