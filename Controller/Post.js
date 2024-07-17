const {PrismaClient} = require("@prisma/client");
const { validationResult } = require("express-validator");
const prisma = new PrismaClient()
const Postemail = async(req ,res)=>{
    const body = req.body;
    console.log(body);
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(422).json({errors:error.array()})
    }
    try{
    const found = await prisma.users.findUnique({
        where:{
            email:body.email,
        }
    })
        if(found){
            return res.status(200).json("success")
        }
        const user = await prisma.users.create({
            data:{
                email:body.email,
                reffused:true,
                referralcode:body.referralcode,
            }
        })
        res.status(200).json("success")
    }
    catch(e){
        res.status(500).json("error")
    }
    
    
}
module.exports = Postemail