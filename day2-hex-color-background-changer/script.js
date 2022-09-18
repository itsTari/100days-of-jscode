let code = document.querySelector(".hexcode")
let body = document.querySelector(".container")
let value = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
 

 function changeColor(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
        let hexValues = [Math.floor(Math.random()* value.length)]
        hex += value[hexValues]
    }
    code.innerHTML=hex
    body.style.backgroundColor = hex
    
    
    // console.log(hex)
}
