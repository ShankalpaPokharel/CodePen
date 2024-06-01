
const express = require("express")
const router = express.Router()


const {userInfo,getUser} = require("../controllers/userController")
const authenticateJWT = require("../middleware/authMiddleware")



router.get('/userInfo',authenticateJWT,userInfo)
router.get('/getUser',authenticateJWT,getUser)

module.exports = router