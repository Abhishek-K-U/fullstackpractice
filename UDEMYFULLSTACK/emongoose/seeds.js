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

// const p = new  Product({
//         name:'Fairy Eggplant',
//         price:1.00,
//         category:'vegetable'
//     })
// p.save()
// .then(p=>{
//     console.log(p);
// })
// .catch(e=>{
//     console.log(e);
// })

const seedProduct = [
    {
        name:'Fairy Eggplant',
        price:1.00,
        category:'vegetable'
    },
    {
        name:'Organic Goddess Melon',   
        price:4.99,
        category:'fruit'
    },
    {
        name:'Organic Mini Seedless Watermelon',
        price:3.99,
        category:'fruit'
    }
]

Product.insertMany(seedProduct)
.then(res=>{
    console.log(res);
})
.catch(e=>{
    console.log(e);
})