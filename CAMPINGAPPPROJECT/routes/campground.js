const express = require('express');
const router = express.Router();
const cookieParser=require('cookie-parser');
const session=require('express-session');
router.use(cookieParser('oggyboogy'));

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        return next();
    }
    res.send("Sorry, you need admin access to view this");
});

router.use(session({secret: 'oggy', resave: false, saveUninitialized: true}));

router.get('/', (req, res) => {
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count=1;
    }
    const {fruit = 'No Name'} = req.cookies;
    res.send(`The fruit is: ${fruit}, and you have viewed this page ${req.session.count} times`);
    // res.send(`You have viewed this page ${req.session.count} times`);
    //res.send('This is the campgrounds page');
});
router.get('/:id', (req, res) => {
    const {username='No Name'}=req.query;
    req.session.username=username;
    res.send(`welcome back ${username}`);
});
router.get('/:id/edit', (req, res) => {
    const {username} = req.session;
    res.send(`welcome back ${username}`);
});

router.get('/:id/edit/secret', (req, res) => {
    res.cookie('cartoon','tom',{signed:true});
    console.log(res.cookie);
    res.send('This is a secret page');
});

module.exports = router;