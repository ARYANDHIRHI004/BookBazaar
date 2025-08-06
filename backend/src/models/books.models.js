import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    bookname:{
        type:String,
        require: true
    },
    bookDescription:{
        type:String,
        required: true
    },
    ISBNno:{
        type:String,
    },
    author:{
        type:String
    },
    quantity:{
        type:Number
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref:'user'
    }
},{timestamps: true})

export const Book = mongoose.model('Book',booksSchema)