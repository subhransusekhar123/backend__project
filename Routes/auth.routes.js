const express = require("express");
const authController = require("../controller/auth.controller");
const encryptPassword = require("../middleware/auth.middleware");
const authRouter = express.Router() ;

authRouter.post("/signup",encryptPassword,authController.signUp) ;
authRouter.get("/signIn",authController.signIn);

module.exports = authRouter ;