const mongoose=require("mongoose");
const Campground=require('../models/campground');
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


const seedDB=async()=>{
    await Campground.deleteMany({});    
    const camp=new Campground({title:"Home",price:100,description:"Beautiful Campground",location:"KArnataka"});
    await camp.save();
}

seedDB();