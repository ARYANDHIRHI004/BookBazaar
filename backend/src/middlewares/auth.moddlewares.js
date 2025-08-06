import { ACCESS_TOKEN_SECRET } from "../constents.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken"

const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const accessToken =
      req.cookies?.accessToken || req.header("Authorization").split("bearer");

    if (!accessToken) {
      throw new ApiError(400, "Please Login");
    }

    const decodedToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);

    req.user = decodedToken;
    next();
  } catch (error) {
    console.log("unauthenticated user", error);
    next()
  }
});

const checkAdmin = asyncHandler(async (req, _, next) => {
  try {
    const userId = req.user?._id;
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(400, "You are not logged In");
    }

    if (user?.role !== "ADMIN") {
      throw new ApiError(402, "You are not authorized");
    }
    next();
  } catch (error) {
    console.log("unauthorized user", error);
  }
});

export { verifyJWT, checkAdmin };
