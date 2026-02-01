const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Movie')
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Connection error:', err);
    });

    const movieSchema = new mongoose.Schema({
        title: String,
        director: String,
        releaseYear: Number,
        genre: String
    });

    const Movie = mongoose.model('Movie', movieSchema);  //creates movies collection in the database
    const pp= new Movie({title:"Inception",director:"Christopher Nolan",releaseYear:2010,genre:"Sci-Fi"});

    Movie.insertMany([
        {title:"The Dark Knight",director:"Christopher Nolan",releaseYear:2008,genre:"Action"},
        {title:"Pulp Fiction",director:"Quentin Tarantino",releaseYear:1994,genre:"Crime"},
        {title:"The Shawshank Redemption",director:"Frank Darabont",releaseYear:1994,genre:"Drama"}
    ]).then(() => {
        console.log('Movies inserted successfully!');
    })
    .catch((err) => {
        console.error('Insertion error:', err);
    });


















// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB successfully!');
// });