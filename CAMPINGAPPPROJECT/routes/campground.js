const express=require("express");
const router=express.Router();
const campgrounds=require('../controllers/campground');
const Campground=require('../models/campground');
const catchAsync=require('../utills/catchAsync');
const ExpressError=require('../utills/ExpressError');
const { campgroundSchema } = require('../schemas');
const { isLoggedIn, isAuthor,validateCampground } = require('../middleware');

router.get("/",catchAsync(campgrounds.index));
router.get("/new",isLoggedIn,campgrounds.newForm);
router.post("/",isLoggedIn,validateCampground,catchAsync(campgrounds.createCampground));
router.get('/:id',catchAsync(campgrounds.showCampground));
router.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(campgrounds.editCampground));
router.put('/:id',isLoggedIn,isAuthor,catchAsync(campgrounds.updateCampground));
router.delete('/:id',isLoggedIn,isAuthor,catchAsync(campgrounds.deleteCampground));

module.exports=router;