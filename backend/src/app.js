import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

//Routes imports
import userRouter from "./routes/user.routes.js"
import booksRouter from "./routes/books.routes.js"
import ordersRouter from "./routes/orders.routes.js"
import cartsRouter from "./routes/carts.routes.js"
import reviewsRouter from "./routes/reviews.routes.js"

app.use('/api/v1/users', userRouter)
app.use('/api/v1/books', booksRouter)
app.use('/api/v1/carts', cartsRouter)
app.use('/api/v1/orders', ordersRouter)
app.use('/api/v1/reviews', reviewsRouter)


export default app