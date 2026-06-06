const express=require('express');
const router=express.Router();
const User=require('../models/user');
const catchAsync=require('../utills/catchAsync');
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
const users=require('../controllers/users');
router.get("/register", users.renderRegisterForm);
router.post("/register",catchAsync(users.register));
router.get("/login", users.loginForm);
router.post('/login',storeReturnTo,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),users.login);
router.get('/logout', users.logout);

module.exports=router;