
const express = require("express")
const router = express.Router()


const {userInfo} = require("../controllers/userController")
const authenticateJWT = require("../middleware/authMiddleware")



router.get('/userInfo',authenticateJWT,userInfo)

module.exports = router