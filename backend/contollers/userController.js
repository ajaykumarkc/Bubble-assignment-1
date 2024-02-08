const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register a user
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    const{name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
    });

    sendToken(user,201,res);
});

//Login User

exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
    const{email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or password",401))
    }

    const isPassWordMatched = await user.passwordCompare(password)

    if(!isPassWordMatched){
        return next(new ErrorHandler("Invalid Email or password",401))
    }

    sendToken(user,200,res);

 

})

//LogOut User

exports.logout = catchAsyncErrors(async (req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })

    res.status(200).json({
        success:true,
        message:"Logged out",
    })
})

//Get User Details

exports.getUserDetails = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user,
    })

});

