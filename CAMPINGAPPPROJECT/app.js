const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const Campground=require('./models/campground');
const catchAsync=require('./utills/catchAsync');
const ExpressError=require('./utills/ExpressError');
const { campgroundSchema , reviewSchema} = require('./schemas');
const methodOverride=require("method-override");
const Review=require('./models/review');
const  morgan=require("morgan");
const ejsMate=require("ejs-mate");
const campRouter=require('./routes/campground');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const flash=require('connect-flash');
mongoose.connect('mongodb://localhost:27017/yelp-camp')
.then(()=>{
    console.log("Mongo Connection Open");
})
.catch(err=>{
    console.log("Mongo Connection Error");
    console.log(err);
})
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{ 
    console.log("Database connected");
});
const app=express();
app.engine('ejs',ejsMate);
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(cookieParser('oggyboogy'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(session({secret: 'oggy', resave: false, saveUninitialized: true}));
app.use(flash());

const verPass= ((req,res,next)=>{
    const {password} = req.query;
    if(password==='chicken'){
       return next();
    }
    return res.send("Sorry, you need a password");
})

const validateCampground=(req,res,next)=>{
    const { error } = campgroundSchema.validate(req.body);
    if(error){
        const msg=error.details.map(el=>el.message).join(",");
        throw new ExpressError(msg,400);
    }else{
    next();
    }
};

const validateReview=(req,res,next)=>{
    const { error } = reviewSchema.validate(req.body);
    if(error){
        const msg=error.details.map(el=>el.message).join(",");
        throw new ExpressError(msg,400);
    }else{
    next();
    }
}
app.use('/camp', campRouter);
app.get( '/comp',(req,res)=>{
    res.cookie('fruit','grape');
    res.send("Cookie Set");
});


app.get("/",(req,res)=>{
    console.log(req.requestTime);
    res.render('home');
});
app.get("/campgrounds",catchAsync(async(req,res)=>{
    const campgrounds=await Campground.find({});
    res.render('campgrounds/index',{campgrounds});
}));
app.get("/campgrounds/new",(req,res)=>{
    res.render('campgrounds/new');
});

app.get('/secret',verPass ,(req,res)=>{
    res.send("The secret is 42");
});
app.post("/campgrounds",validateCampground,catchAsync(async(req,res,next)=>{
    // if(!req.body.campground) throw new ExpressError("Invalid Campground Data",400); 
    const campground=new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}));

app.get('/campgrounds/:id',catchAsync(async(req,res)=>{
    const campground=await Campground.findById(req.params.id).populate('reviews');
    res.render('campgrounds/show',{campground , message:req.flash('success')});
}));
app.get('/campgrounds/:id/edit',catchAsync(async(req,res)=>{
    const campground=await Campground.findById(req.params.id);
    res.render('campgrounds/edit',{campground});
}));
app.put('/campgrounds/:id',catchAsync(async(req,res)=>{
    const {id}=req.params;
    const campground=await Campground.findByIdAndUpdate(id,{...req.body.campground});
    res.redirect(`/campgrounds/${campground._id}`);
}));
app.delete('/campgrounds/:id',catchAsync(async(req,res)=>{
    const {id}=req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}));
app.post("/campgrounds/:id/reviews", validateReview, catchAsync(async(req,res)=>{
    const campground=await Campground.findById(req.params.id);
    const review=new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success','Successfully created a new review');
    res.redirect(`/campgrounds/${campground._id}`);
}));

app.delete("/campgrounds/:id/reviews/:reviewId", catchAsync(async(req,res)=>{
    const {id, reviewId}=req.params;
    await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted review');
    res.redirect(`/campgrounds/${id}`);
}));



app.all('/{*path}',(req,res,next)=>{
    next(new ExpressError("Page Not Found",404));
});

app.use((err, req, res, next) => {
    const {statusCode=500}=err;
    if(!err.message) err.message="Oh No, Something Went Wrong!";
    res.status(statusCode).render('error',{err});
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});