import { ACCESS_TOKEN_SECRET } from "../constents";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoke";

const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = res.cookies?.accessToken || req.header("Authorization").split("bearer");

    if (!accessToken) {
      throw new ApiError(400, "Please Login");
    }

    const decodedToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);

    req.user = decodedToken;
    next;
  } catch (error) {
    console.log("unauthenticated user", error);
  }
});

export {verifyJWT}
