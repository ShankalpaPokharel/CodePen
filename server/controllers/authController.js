const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");

exports.signup = async (req, res) => {
    console.log("signup hit")
    const { name, email, password, username } = req.body;
    // console.log(name, email, password,username)
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        user = new User({ name, email, password, username });
        await user.save();

        return res.status(200).json({ msg: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log("email,password",email,password)
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "Inavalid Credentials" });

        const isMatch  = await user.isPasswordCorrect(password)

        console.log("isMatch",isMatch)

        if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials" });
        user.password = null

        const payload = {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            photoUrl:user.photoUrl
        };
        

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.EXPIRE_IN }
        );
        console.log("user",user)

      
        console.log("user backend",user)
        const data = {msg:"Successfully log in",user:user}
        return res.status(200).cookie("jwt",token).json(data)
    } catch (err) {
        console.log("login catach")
        res.status(500).json({ error: err.message });
    }
};

exports.googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"],
});

exports.githubAuth = passport.authenticate('github', { scope: [ 'user:email' ] });
exports.facebookAuth = passport.authenticate('facebook',{ scope: ['email'] });


exports.googleAuthCallback = (req, res, next) => {
    passport.authenticate(
        "google",
        { session: false, failureRedirect: "http://localhost:5173" },
        async(err, user) => {
            if (err || !user) {
                console.log(err)
                return res.redirect("/");
            }

            // const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            //     expiresIn: process.env.EXPIRE_IN,
            // });

            // console.log("user google auth callback",user)

            // return

            // const userId = user.user._id
            // const user_info = await User.findOne({ userId });

            const payload = {
                id: user._id,
                name: user.name,
                username:user.username,
                email: user.email,
                photoUrl:user.photoUrl,
                followers:user.followers,
                following:user.following

            };
            
   
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: process.env.EXPIRE_IN }
            );

            res.cookie("jwt", token);
            res.redirect("http://localhost:5173/your-work");
        }
    )(req, res, next);
};
exports.githubAuthCallback = (req, res, next) => {
    passport.authenticate(
        "github",
        { session: false, failureRedirect: "http://localhost:5173" },
        async(err, user) => {
            // res.send({userr:user,respo:"hi"})
            // return
            if (err || !user) {
                console.log(err)
                return res.redirect("http://localhost:5173");
            }

            // const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            //     expiresIn: process.env.EXPIRE_IN,
            // });

            // console.log("user google auth callback",user)

            // return

            // const userId = user.user._id
            // const user_info = await User.findOne({ userId });

            const payload = {
                id: user._id,
                name: user.name,
                username:user.username,
                // email: user?.email,
                photoUrl:user.photoUrl,
                followers:user.followers,
                following:user.following

            };
            
   
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: process.env.EXPIRE_IN }
            );

            res.cookie("jwt", token);
            res.redirect("http://localhost:5173/your-work");
        }
    )(req, res, next);
};
exports.facebookAuthCallback = (req, res, next) => {
    passport.authenticate(
        "facebook",
        { session: false, failureRedirect: "http://localhost:5173" },
        async(err, user) => {
            // console.error("Authentication error or no user:", err);
            // res.send({userr:user,respo:"hi"})
            // return
            if (err || !user) {
                console.log(err)
                return res.redirect("http://localhost:5173");
            }

            // const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            //     expiresIn: process.env.EXPIRE_IN,
            // });

            // console.log("user google auth callback",user)

            // return

            // const userId = user.user._id
            // const user_info = await User.findOne({ userId });

            const payload = {
                id: user._id,
                name: user.name,
                username:user.username,
                // email: user?.email,
                photoUrl:user.photoUrl,
                followers:user.followers,
                following:user.following

            };
            
   
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: process.env.EXPIRE_IN }
            );

            res.cookie("jwt", token);
            res.redirect("http://localhost:5173/your-work");
        }
    )(req, res, next);
};

exports.success = (req, res) => {
    res.send(req.query.token);
};

exports.usernameExist = async(req,res)=>{
    console.log("enter in username exist" , req.body.value)
    const username = req.body.value
    console.log("recieving username:",username)
    try {
        const user = await User.findOne({username})
        if (user){
            return res.json({msg:true})
        }
        return res.json({msg:false})   
    } catch (error) {
        return res.json({error:error})
    }
    
}
exports.emailExist = async(req,res)=>{
    const email = req.body.value
    console.log("email exist ",email)
    try {
        const user = await User.findOne({email})
        if (user){
            return res.json({msg:true})
        }
        return res.json({msg:false}) 
    } catch (error) {
        return res.json({error:error})
    }
    
}
