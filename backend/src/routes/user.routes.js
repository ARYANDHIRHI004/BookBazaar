import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.moddlewares.js";

const userRouter = Router()

userRouter.route("/register").post(registerUser)
userRouter.route("/email-verify/:verificationToken").post(verifyJWT, emailVerify)
userRouter.route("/login").post(loginUser)
userRouter.route("/logout").get(verifyJWT, logoutUser)
userRouter.route("/get-me").get(verifyJWT, getCurrentUser)
userRouter.route("/update-password").post(verifyJWT, changePassword)
userRouter.route("/update-details").post(verifyJWT, updateUserDetails)

export default userRouter