let body = document.querySelector("body")
let name = document.querySelector(".pink")
let color = ['black', 'blue', 'red', 'orange','green', 'white', 'purple','yellow','gold']

body.style.backgroundColor = 'pink'

function  changeColor(){
    // alert("you clicked me")
    let colorStr = color[Math.floor (Math.random() *color.length)]
    body.style.backgroundColor = colorStr
 }

 function randomColor() {
    let letters = '0123456789ABCDEF' .split('');
    let color = '#';
    for(var i=0; i<6; i++){
        color += letters[Math.floor (Math.random() *16)]
    }
    return color;
 }
 name.style.color = randomColor()