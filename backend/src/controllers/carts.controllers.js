import { Cart } from "../models/cartItems.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

export const getCart = asyncHandler(async (req, res) => {
  const userId = req.user?._id;

  const cart = await Cart.findOne({
    cartOwner: userId,
  });

  if (!cart) {
    throw new ApiError(401, "Cart is Empty");
  }

  return res
    .status(200)
    .json(new ApiResponse(201, cart, "Cart fetched succesfully"));
});

export const addItemsToCart = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user?._id;

  if (!userId) {
    throw new ApiError(402, "unauthorized request");
  }

  if (!bookId) {
    throw new ApiError(402, "wrong book id");
  }

  const cart = await Cart.findOne({
    cartOwner: userId,
  });

  if (!cart) {
    const cart = await Cart.create({
      cartOwner: userId,
      cartItems: [
        {
          cartItem: bookId,
          itemQuentity: 1,
        },
      ],
    });
    return res.status(200).json(
        new ApiResponse(201, cart, "book is added in cart")
    );
  } else {
    const isAlreadyBookPresent = cart.cartItems.find((item) => item.cartItem === bookId);
    if (isAlreadyBookPresent) {
      return res.status(200).json(
        new ApiResponse(201, {}, "book is already in cart")
      );
    } else {
      cart.cartItems.push({
        cartItem: bookId,
        itemQuentity: 1,
      });
      await cart.save();
      return res.status(200).json(
        new ApiResponse(201, cart, "book is added in cart")
      );
    }
  }
});
