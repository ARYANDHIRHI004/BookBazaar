import mongoose from "mongoose";

const cartItem = new mongoose.Schema({
    cartItem:{
        type: mongoose.Types.ObjectId,
        ref:'books'
    },
    itemQuentity:{
        type:Number,
        required:true
    }
})

const cartSchema = new mongoose.Schema({
    cartOwner:{
        type: mongoose.Types.ObjectId,
        ref:'user'
    },
    cartItems:[cartItem]
},{timestamps:true})

export const Cart = mongoose.model('Cart', cartSchema)