const jwt = require('jsonwebtoken');
const authenticateJWT = (req, res, next) => {
    console.log("authenticateJWT");

    const token = req.cookies.jwt;

    console.log("backend got token" , token)
   

    if (!token) return res.status(403).json({error:"Please Login"});

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log("user from authenticateJwt",user)
        req.user = user;
        console.log(req.user)
        next();
    } catch (error) {
        console.log("JWT verification failed:", error);
        res.status(403).json({message:"session expire or incorrect token please again login"});
    }
};

module.exports = authenticateJWT
