const express = require('express');
const app = express();
const path=require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/exmongodb')
.then(()=>{
    console.log("MONGO CONNECTION OPEN!!!");
})
.catch(err=>{
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
})


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/products',async(req,res)=>{
    const products = await Product.find({})
    console.log(products);  
    res.send('All Products');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})