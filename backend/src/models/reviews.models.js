import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviewGiver:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    bookId:{
        type:mongoose.Types.ObjectId,
        ref:"book"
    },
    reviewMessage:{
        type:String,
        required:True
    }
},{timestamps:true})

export const Review = mongoose.model('Review', reviewSchema)