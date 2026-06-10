const express=require("express");
const router=express.Router();
const campgrounds=require('../controllers/campground');
const Campground=require('../models/campground');
const catchAsync=require('../utills/catchAsync');
const ExpressError=require('../utills/ExpressError');
const { campgroundSchema } = require('../schemas');
const { isLoggedIn, isAuthor,validateCampground } = require('../middleware');
const multer  = require('multer');
const {storage}=require('../cloudinary');
const upload=multer({storage});

router.route("/")
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn,upload.array("image"),validateCampground,catchAsync(campgrounds.createCampground));

router.route("/new")
    .get(isLoggedIn,campgrounds.newForm);

router.route("/:id")
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn,isAuthor,upload.array("image"),validateCampground,catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn,isAuthor,catchAsync(campgrounds.deleteCampground));
    
router.route('/:id/edit')
    .get(isLoggedIn,isAuthor,catchAsync(campgrounds.editCampground));


module.exports=router;