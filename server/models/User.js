const mongoose = require("mongoose");
const bcrypt =  require("bcrypt")


const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: { type: String,  unique: true },
        password: { type: String, default: null },
        photoUrl:{ type: String, default: "https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&version=0&width=80&height=80&quot;" },
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        googleId: { type: String, default: null },
        facebookId: { type: String, default: null },
        githubId: { type: String, default: null },
    },
    {
        timestamps: true,
    }
);


userSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}



const User = mongoose.model("User", userSchema);

module.exports = User;
