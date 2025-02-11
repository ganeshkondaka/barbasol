-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "user_input" TEXT NOT NULL,
    "ai_response" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
