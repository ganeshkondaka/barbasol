-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_userId_fkey";

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
