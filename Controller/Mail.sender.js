const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
require('dotenv').config()
const nodemailer = require("nodemailer")
const mailsend = async(req, res)=>{
    const body = req.body;
    
    const find = await prisma.users.findUnique({
       where:{
        email:body.refreemail,
       }
    })
    if(find){
       return  res.status(200).json("Cannot use Referral")
    }
    else{
    const ref = await prisma.users.create({
        data:{
            email:body.refreemail,
            reffused:true,
            referralcode:"238828929323",
        }
    }) 
}
    var to = body.refreemail
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.user,
        pass: process.env.code,
    },
});
try{
var text = "already used";
var html = "dont press me";
if(!body.reffused){
    text = "Hey! use My referral code to get some extra rewards",
    html = "<button>use Referral code</button>"
}
async function main() {
        const info = await transporter.sendMail({
            from: `${body.name} <golu260204@gmail.com>`, // sender address
            to: to, // list of receivers
            subject: "Referral code ", // Subject line
            text: text, // plain text body
            html: html, // html body
        });
        res.status(200).json("mail sent successfully")
}
main()
}
catch(e){
    console.log("mail couldnot be send succesfully");
}

}

module.exports = mailsend