const express = require("express");

const app = express();
const dotenv = require("dotenv")
const cors = require("cors");

const database = require("./database/database");

const offerInfoRouter = require("./router/offerInfoRouter")
const userRouter = require("./router/userRouter")

dotenv.config()

database();
app.use(express.json())
app.use(cors())

app.use("/v1/api/offerInfo" , offerInfoRouter)
app.use("/v1/api/auth" , userRouter)








const port = process.env.PORT||8000
const server = app.listen(port, ()=>{
    console.log("Server is running on port 8000");
})
