const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser')
const auth_routes = require('./routes/Auth_routes')
const sequelize = require('./utils/db')


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use(auth_routes)



sequelize.sync().then((result)=>{
    app.listen(port, ()=>{
        console.log(`Server Run on this port: ${port}`)
    })
}).catch((err)=>{
    console.log(err)
})
