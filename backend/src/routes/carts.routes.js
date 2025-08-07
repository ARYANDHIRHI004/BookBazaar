import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.moddlewares.js";
import { addItemsToCart, getCart } from "../controllers/carts.controllers.js";

const cartsRouter = Router()

cartsRouter.route("/get-cart").get(verifyJWT, getCart)
// cartsRouter.route("/get-cart-items").get(verifyJWT, getCartItems)
cartsRouter.route("/add-items-to-cart/:bookId").get(verifyJWT, addItemsToCart)
// cartsRouter.route("/remove-items-to-cart").get(verifyJWT, removeItemsToCart)


export default cartsRouter