const express=require('express');
const router=express.Router();
const User=require('../models/user');
const catchAsync=require('../utills/catchAsync');
const passport = require('passport');
const { storeReturnTo } = require('../middleware');

router.get("/register",(req,res)=>{
    res.render('../views/users/register');
});
router.post("/register",catchAsync(async(req,res)=>{
    try{
    const {username,email,password}=req.body;
    const user=new User({username,email});
    const registeredUser=await User.register(user,password);
    req.login(registeredUser,err=>{
        if(err) return next(err);
        req.flash('success','Welcome to Yelp Camp!');
        res.redirect('/campgrounds');
    })
    
    }catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
}));

router.get("/login",(req,res)=>{
    res.render('../views/users/login');
});

router.post('/login',storeReturnTo,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),(req,res)=>{
    req.flash('success','Welcome back!');
    const redirectUrl=res.locals.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
});

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) {
         return next(err); 
    }
    req.flash('success','Goodbye!');
    res.redirect('/campgrounds');
  });
});

module.exports=router;