import { Router } from "express";
import { addReviews, getAllReviews } from "../controllers/reviews.controllers.js";
import { checkUser } from "../middlewares/auth.moddlewares.js";

const reviewsRouter = Router()

reviewsRouter.route("/books/:bookId/add-review").post(addReviews)
reviewsRouter.route("/books/:bookId/review").post(getAllReviews)
reviewsRouter.route("/review/:reviewId").post(checkUser, deleteReview)


export default reviewsRouter