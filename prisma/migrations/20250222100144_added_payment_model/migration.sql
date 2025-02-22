-- CreateTable
CREATE TABLE "Payment_history" (
    "id" TEXT NOT NULL,
    "razorpay_order_id" TEXT NOT NULL,
    "razorpay_payment_id" TEXT NOT NULL,
    "razorpay_signature" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "useremail" TEXT NOT NULL,

    CONSTRAINT "Payment_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment_history" ADD CONSTRAINT "Payment_history_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
