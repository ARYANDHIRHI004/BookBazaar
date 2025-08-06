import { Router } from "express";
import { checkAdmin, verifyJWT } from "../middlewares/auth.moddlewares.js";

const booksRouter = Router()

// booksRouter.route("/get-all-books").get(verifyJWT, getAllBooks)
// booksRouter.route("/get-book-by-id/:bookId").get(verifyJWT, getBookById)
// booksRouter.route("/add-book").post(verifyJWT, checkAdmin, addBooks)
// booksRouter.route("/update-book").put(verifyJWT, checkAdmin, updateBookDetails)
// booksRouter.route("/delete-book").delete(verifyJWT, checkAdmin, deleteBookDetails)

export default booksRouter