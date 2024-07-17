const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
app.use(cors({
    origin:"http://localhost:5173"
}))
const PORT = process.env.PORT || 3000
const validator = require("email-validator")
app.use(express.json())
const nodemailer = require("nodemailer");
const router = require("./Router/Referral")
const loginValidator = require("./Validators/validator")
app.use("/referral",loginValidator ,router)
app.listen(PORT, () => {
    console.log("listening to PORT");
})
