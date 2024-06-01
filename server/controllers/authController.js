const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");

exports.signup = async (req, res) => {
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
        if (!user) return res.status(400).json({ msg: "User does not exist" });

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


exports.googleAuthCallback = (req, res, next) => {
    passport.authenticate(
        "google",
        { session: false, failureRedirect: "http://localhost:5173" },
        async(err, user) => {
            if (err || !user) {
                console.log(err)
                return res.redirect("/");
            }

            const token = jwt.sign({ user }, process.env.JWT_SECRET, {
                expiresIn: process.env.EXPIRE_IN,
            });

            console.log("user google auth callback",user)

            // return

            // const userId = user.user._id
            // const user_info = await User.findOne({ userId });

            // const payload = {
            //     id: user_info._id,
            //     name: user_info.name,
            //     username: user_info.username,
            //     email: user_info.email,
            //     photoUrl:user_info.photoUrl
            // };
            
   
            // const token = jwt.sign(
            //     payload,
            //     process.env.JWT_SECRET,
            //     { expiresIn: process.env.EXPIRE_IN }
            // );

            res.cookie("jwt", token);
            res.redirect("http://localhost:5173/protected");
        }
    )(req, res, next);
};

exports.success = (req, res) => {
    res.send(req.query.token);
};

