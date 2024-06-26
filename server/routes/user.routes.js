
const express = require("express")
const router = express.Router()


const {userInfo,getUser,saveProject,getProjectById,getPinProjects, test} = require("../controllers/userController")
const authenticateJWT = require("../middleware/authMiddleware")



router.get('/userInfo',authenticateJWT,userInfo)
router.get('/getUser',authenticateJWT,getUser)
router.post('/save',authenticateJWT,saveProject)
router.get('/getProject/:projectId',getProjectById)
router.get('/getPinProjects',authenticateJWT,getPinProjects)
router.get('/test',test)

module.exports = router