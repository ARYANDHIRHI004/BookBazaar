import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderBy:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    orderItems:{
        type: mongoose.Types.ObjectId,
        ref:"cart"
    },
    orderItem:{
        type: mongoose.Types.ObjectId,
        ref:"books"
    },
    totalPrice:{
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String
    },
    isPaid:{
        type:Boolean,
        default:false
    }
},{timestamps: true})

export const order = mongoose.model("order", orderSchema)


