const express = require("express")
const router = express.Router()
const Postemail = require("../Controller/Post")
const mailsend = require("../Controller/Mail.sender")
const { loginValidator } = require("../Validators/validator")
router.post("/", Postemail)
router.post("/send" , mailsend)
module.exports = router