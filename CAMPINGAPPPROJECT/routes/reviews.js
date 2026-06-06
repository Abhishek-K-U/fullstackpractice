const express=require("express");
const { reviewSchema } = require('../schemas');
const Review=require('../models/review');
const Campground=require('../models/campground');
const router=express.Router({mergeParams:true});
const catchAsync=require('../utills/catchAsync');
const ExpressError=require('../utills/ExpressError');
const { isLoggedIn,validateReview,isReviewAuthor } = require('../middleware');
const Reviews=require('../controllers/reviews');

router.post("/", isLoggedIn, validateReview, catchAsync(Reviews.createReview));
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, catchAsync(Reviews.deleteReview));

module.exports=router;