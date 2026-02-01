
let button = document.getElementById('changeColor');
let h= document.querySelector('h1');
let cF=document.getElementById('cF');
let cL=document.getElementById('cL');

button.addEventListener('click', () => {
    let r=Math.floor(Math.random() * 255);
let g=Math.floor(Math.random() * 255);
let b=Math.floor(Math.random() * 255);
let color = `rgb(${r}, ${g}, ${b})`;
document.body.style.backgroundColor = color;
h.textContent = `Background Color: ${color}`;

});

cF.addEventListener('submit', (e) => {
    let i=cF.elements.ex.value;
    let i2=cF.elements.ex2.value;
    let k=document.createElement('li');
    k.textContent = `Color: ${i} and ${i2}`;
    cL.append(k);
    cF.reset();
});
cL.addEventListener('click', (e) => {
    e.target.remove() ;
});