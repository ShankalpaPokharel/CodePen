exports.userInfo=(req,res)=>{
    res.json({yourdata:"You got the data from backend 123",user:req.user})
}
exports.getUser=(req,res)=>{
    return res.json({data:req.user})
}