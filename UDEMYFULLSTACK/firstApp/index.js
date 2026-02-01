const express = require('express'); 
const app = express();
// app.use((req,res)=>{
//     console.log("New Request Made!!");
//     res.send('<h1>This is my first express app</h1>');
// })
app.get('/',(req,res)=>{
    res.send('<h1>This is my <b style="color: blue;">home</b> page</h1>');
})
app.get('/r/:abhi',(req,res)=>{
    console.log(req.params);
    const {abhi} = req.params;
    res.send(`<h1>This is my <b style="color: blue;">${abhi}</b> page</h1>`);
})
app.get('/r/:abhi/:id',(req,res)=>{
    console.log(req.params);
    const {abhi,id} = req.params;
    res.send(`<h1>This is my <b style="color: blue;">${abhi}</b> page with ${id}</h1>`);
})
app.get('/cat',(req,res)=>{
    res.send('<h1>This is my cat page for testing</h1>');
})
app.get('/dog',(req,res)=>{
    res.send('<h1>This is my dog page</h1>');
})
app.post('/cats',(req,res)=>{
    res.send('<h1>This is a post request for cat page</h1>');
})
app.get('/search',(req,res)=>{
    const {q} = req.query;
    res.send(`<h1>This is my search page: ${q}</h1>`);
})
app.get(/(.*)/,(req,res)=>{
    res.send('<h1 style="color:red;">PLEASE CHECK YOUR PATH!!!</h1>');
})

app.listen(3000,()=>{
    console.log("Server is listening in port 3000!!");
})