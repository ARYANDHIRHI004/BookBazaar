import dotenv from "dotenv"

dotenv.config({
    path :"./.env"
})

export const DB_NAME = "BookBazaar"

export const PORT = process.env.PORT
export const MONGODB_URI = process.env.MONGODB_URI

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY

export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY