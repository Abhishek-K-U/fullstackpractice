// // 

// // const s = (url)=>{
// //     const delay = Math.floor(Math.random() * 4500) + 500;
// //     setTimeout(() => {
// //         if (delay > 4000) {
// //             url("timeout...");
// //         } else {
// //             url("here");
// //         }
// //     }, delay);
// // }

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }


// // s('boo/sd.com',
// //     function(response){
// //         console.log('1');
// //         console.log(response);
// //         s('boo/sd.com', function(response){
// //             console.log('2');
// //             console.log(response);
// //         },
// //         function(error){
// //             console.log('Error in second request:', error);
// //         })
// //     },
// //     function(error){
// //         console.log('Error in first request:', error);
// //     })
        

// const res = fakeRequestPromise("jskdjkj");
// res.then(()=>{
//     console.log("Response received");
// });


// const res = (url)=>{
//     return new Promise((resolve,reject)=>{
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             console.log(`Request to ${url} completed after ${delay}ms`);
//             resolve();
//         },2000);
//     })
// }

// res("red")
//     .then(()=>res("blue"))
//     .then(()=>res("green"))
//     .then(()=>res("yellow"))
//     .then(()=>res("purple"))
//     .then(()=>res("orange"))
//     .then(()=>res("pink"))

// const login = async(username,password)=>{
//     if(!username || !password) throw "missing cred"
//     if(password.length < 6) return "password too short"
//     throw "login failed"
// }


// login("user", "abhi,mdnvm")
//     .then(response=>{
//         console.log("Login successful:", response);
//     })
//     .catch(error=>{
//         console.error("Login failed:", error);
//     })


// const pok = async ()=>{
//     try{
//     // const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     const data = await res.json();
//     console.log(data);
//     }catch(error){
//         console.error("Error fetching data:", error);
//     }
// }
// pok();

// const se= document.getElementById("search").value;
// const btn= document.getElementById("search-btn");

// const res = async()=>{
//     try{
//         const response = await axios.get('https://api.tvmaze.com/search/shows?q={$searchTerm}');
//     }catch(error){
//         console.error("Error fetching data:", error);
//     }
// }
// res();

// function makeColor(r,g,b){
//     const color={};
//     color.r=r;
//     color.g=g;
//     color.b=b;
//     color.rgb= function(){
//         const {r,g,b}=this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     return color;
// }
// const c1 = makeColor(255, 0, 0);

// function makeColor(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// makeColor.prototype.rgb=function(){
//     const {r,g,b}=this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
// makeColor.prototype.hex=function(){
//     const {r,g,b}=this;
//     return `#`+((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// makeColor.prototype.rgba=function(a=1.0){
//     const {r,g,b}=this;
//     return `rgb(${r}, ${g}, ${b}, ${a})`;
// }
// const c1 = new makeColor(255, 0, 0);
// class MAKECOLOR{
//     constructor(r, g, b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }
//     innerRGB(){
//         const {r,g,b} = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb(){
//         return `rgb(${this.innerRGB()})`;
//     }
//     rgba(a=1.0){
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }   
// }
// const c1= new MAKECOLOR(255, 10, 250);

class PET{
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    eat(){
        return `${this.name} is eating.`;
    }
}
//can use super(name,age,type) to call the parent class constructor
class CAT extends PET {
    talk(){
        return `${this.name} says meow!`;
    }
}


const kitty = new CAT("Whiskers", 2, "Cat");