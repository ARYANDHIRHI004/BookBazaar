import { Book } from "../models/books.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

export const getAllBooks = asyncHandler(async (req, res) => {
  
    const allBooks = await Book.find()

    if(!allBooks){
        throw new ApiError(501, "No books to show")
    }

    return res.status(200).json(
        new ApiResponse(201, allBooks, "All Books fetched successfully")
    )

})

export const addBooks = asyncHandler(async (req, res) => {
  
    const {bookname, bookDescription, ISBNno, author, quantity} = req.body
    const userId = req.user?._id

    const existedBook = await Book.findOne({bookname})

    if(existedBook){
        throw new ApiError(401, "Book already exist.")
    }

    const book = await Book.create({
        bookname,
        bookDescription,
        ISBNno,
        author,
        owner:userId,
        quantity
    })

    if(!book){
        throw new ApiError(501, "Something went wrong while adding book")
    }

    return res.status(200).json(
        new ApiResponse(201, book, "Book added successfully")
    )
    
})

export const getBookById = asyncHandler(async (req, res) => {
    const {bookId} = req.params

    if(!bookId){
        throw new ApiError(401, "provide book id")
    }
    
    const book = await Book.findById(bookId)

    if(!book){
        throw new ApiError(401, "Book not available")
    }

    return res.status(200).json(
        new ApiResponse(201, book, "book fetched successfully")
    )

})