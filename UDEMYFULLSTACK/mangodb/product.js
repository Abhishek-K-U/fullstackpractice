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
            required: true
        },
        onSale: {
            type: Boolean,
            default: false
        }
    })
    const Product = mongoose.model('Product', productSchema);  //creates products collection in the database
    const bike= new Product({name:"EV Bike",price: 36.9});
    bike.save()
    .then((data) => {
        console.log('Product saved successfully!');
        console.log(data);
    })
    .catch((err) => {
        console.error('Save error:', err);
    });