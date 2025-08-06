import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.moddlewares.js";

const cartsRouter = Router()

cartsRouter.route("/get-cart").get(verifyJWT, getCart)
cartsRouter.route("/get-cart-items").get(verifyJWT, getCartItems)
cartsRouter.route("/add-items-to-cart").get(verifyJWT, addItemsToCart)
cartsRouter.route("/remove-items-to-cart").get(verifyJWT, removeItemsToCart)


export default cartsRouter