import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    orderItems: {
      type: mongoose.Types.ObjectId,
      ref: "cart",
    },
    orderItem: {
      type: mongoose.Types.ObjectId,
      ref: "books",
    },
    totalPrice: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DEVLIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

export const order = mongoose.model("order", orderSchema);
