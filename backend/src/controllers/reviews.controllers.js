import { Review } from "../models/reviews.models.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/AsyncHandler.js";

export const getAllReviews = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const reviews = await Review.find({
    bookId,
  });

  if (!reviews) {
    throw new ApiError(401, "Reviews not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(201, reviews, "Reviews fetched succesfully"));
});

export const addReviews = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user?._id;
  const { reviewMessage } = req.body;

  const existedReview = await Review.findOne({
    reviewGiver: userId,
    bookId,
  });

  if (existedReview) {
    throw new ApiError(401, "Your review already existed for this book ");
  }

  const review = await Review.create({
    reviewMessage,
    reviewGiver: userId,
    bookId,
  });

  if (!review) {
    throw new ApiError(501, "Something went wrong while adding review");
  }

  return res
    .status(200)
    .json(new ApiResponse(201, review, "Review addes successfully"));
});

export const deleteReview = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  const { reviewId } = req.params;

  const review = await Review.findOneAndDelete({
    _id: reviewId,
    reviewGiver: userId,
  });

  if (!review) {
    throw new ApiError(401, "No review to show");
  }
});
