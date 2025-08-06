import { Router } from "express";
import { checkAdmin, verifyJWT } from "../middlewares/auth.moddlewares.js";

const booksRouter = Router()


export default booksRouter