const Auth_Data = require('../model/auth_Schema');
require('dotenv').config()
const jwt = require('jsonwebtoken')

const Auth_Data_Controller = async (req, res)=>{
    try{
        await Auth_Data.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        }).then((result)=>{
            const token = jwt.sign({email: result.email, password: result.password}, process.env.SECRETKEY)
            res.status(201).json({
                msg: 'user saved Successfully in Database',
                token: token
            })
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {Auth_Data_Controller}