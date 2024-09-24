const express = require("express");
const router = express.Router();
const {signupService,loginService} = require("../controller/userController")

router.route("/signup").post(signupService)
router.route("/login").post(loginService)

module.exports =  router;