const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Connection error:', err);
    });

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        }
    })
    const Product = mongoose.model('Product', productSchema);  //creates products collection in the database
    const bike= new Product({name:"Mountain Bike",price:500});
    bike.save()
    .then(() => {
        console.log('Product saved successfully!');
    })
    .catch((err) => {
        console.error('Save error:', err);
    });