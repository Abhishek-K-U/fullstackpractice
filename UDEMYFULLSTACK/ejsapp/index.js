const express = require('express');
const app = express();
const path = require('path');
const reddata = require('./data.json');
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/cat', (req, res) => {
    const cat =[
        'kitten','bab','jack','larry','milo'
    ]
    res.render('cat',{ cat });
});
app.get('/random', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand:randomNum });
});
app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    const data = reddata[subredit];
    if(data){
    res.render('subredit', { ...data });
    }else{
        res.send('notFound');
    }
});
app.listen(3000, () => {
    console.log('EJS app listening on port 3000');
});