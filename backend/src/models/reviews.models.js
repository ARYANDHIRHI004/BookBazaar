import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviewGiver:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    reviewMessage:{
        type:String,
        required:True
    }
},{timestamps:true})

export const review = mongoose.model('review', reviewSchema)