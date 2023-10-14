const express = require('express')
const router = express.Router()
const AuthRoutes = require('../controller/Auth_Data')
const verifyMiddleWare  = require('../middlewares/Auth_m_ware')



router.post('/user-login',[verifyMiddleWare.verifyUser], AuthRoutes.Auth_Data_Controller)


module.exports = router