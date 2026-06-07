const express=require('express');
const router=express.Router();
const User=require('../models/user');
const catchAsync=require('../utills/catchAsync');
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
const users=require('../controllers/users');
router.route("/register")
    .get(users.renderRegisterForm)
    .post(catchAsync(users.register));
router.route("/login")
    .get(users.loginForm)
    .post(storeReturnTo,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),users.login);
router.route('/logout')
    .get(users.logout);

module.exports=router;