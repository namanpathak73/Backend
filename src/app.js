import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "20kb"}))                           //limit of js files that come from frontend
app.use(express.urlencoded({extended: true, limit: "20kb"}))     // Url data is changed sometime so to understand express
app.use(express.static("public"))                                // files that we want to store in our server public folder is made for that
app.use(cookieParser())                                          // to crud cookie in user server

export { app }