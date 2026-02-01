const figlet = require('figlet');
const color=require('colors');
figlet('M.K. ANNAPURNIMA ', function(err,data){
    if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.black);
});