/*
  Warnings:

  - Added the required column `password` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "twoFactor" BOOLEAN NOT NULL DEFAULT false;
