"use strict"

const express = require("express")
const cors = require("cors")
const app = express()


require("dotenv").config()
const PORT = process.env.PORT
const HOST = process.env.HOST

//? DB Connection
require("./src/configs/dbConnection")()

/*---------------------------------------------*/


/*---------------------------------------------*/
// ! Middlewares
app.use(express.json())

const corsOptions = {
    origin: ['http://localhost:5173',"https://to-do-list-react-node-js-app-sigma.vercel.app"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Custom-Header'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: 86400, // cache preflight for  1 day
}

app.use(cors(corsOptions));

/*---------------------------------------------*/
// ! Routes
app.all('/', (req, res) => res.send({ message: 'Welcome to TODO API' }))


app.use("/todos",require("./src/routers/todo"))

/*---------------------------------------------*/
// ! Error Handler
app.use(require("./src/middlewares/errorHandler.js"))


app.listen(PORT,()=>console.log(`Running at: ${HOST}:${PORT}`))