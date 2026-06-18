const sanitizeV5 = require('./utills/mongoSanitizeV5.js');
if(process.env.NODE_ENV!=="production"){
    require('dotenv').config();
}
// require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const ExpressError=require('./utills/ExpressError');
const methodOverride=require("method-override");
const  morgan=require("morgan");
const ejsMate=require("ejs-mate");
const campRouter=require('./routes/campground');
const reviewRouter=require('./routes/reviews');
const userRouter=require('./routes/users');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const flash=require('connect-flash');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/user');
const helmet=require('helmet');
const { MongoStore } = require('connect-mongo');
// const dbUrl=process.env.DB_URL; 
// 'mongodb://localhost:27017/yelp-camp';    
const dbUrl= 'mongodb://localhost:27017/yelp-camp'; 
mongoose.connect(dbUrl)
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
app.set('query parser', 'extended');
app.engine('ejs',ejsMate);
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(sanitizeV5({ replaceWith: '_' }));
app.use(cookieParser('oggyboogy'));
const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: 'oggy'
    }
});

store.on("error", function(e) {
    console.log("SESSION STORE ERROR", e)
});
const sessionConfig = {
    store,
    name:'qmwnebvr',
    secret: 'oggy', 
    resave: false, 
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: false,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/", // add this
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/", // add this
];
const connectSrcUrls = [
    "https://api.maptiler.com/", // add this
];

const fontSrcUrls = [];
app.use(
helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: [],
        connectSrc: ["'self'", ...connectSrcUrls],
        scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
        styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
        workerSrc: ["'self'", "blob:"],
        objectSrc: [],
        imgSrc: [
            "'self'",
            "blob:",
            "data:",
            `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`, //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
            "https://images.unsplash.com/",
            "https://api.maptiler.com/",
        ],
        fontSrc: ["'self'", ...fontSrcUrls],
    },
})
)

app.use(helmet({contentSecurityPolicy: false}));
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
});
// https://cdn.maptiler.com/
// https://api.maptiler.com/
// https://api.maptiler.com/
app.use('/', userRouter);
app.use('/campgrounds', campRouter);
app.use('/campgrounds/:id/reviews', reviewRouter);
app.get("/",(req,res)=>{
    res.render('home');
});
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












// app.get("/fakeUser",async(req,res)=>{
//     const user=new User({email:'abhi@gmail.com',username:'abhi'});
//     const newUser=await User.register(user,'chicken');
//     res.send(newUser);
// });