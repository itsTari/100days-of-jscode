(function(){
    const pictures = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"  
    ];

const buttons = document.querySelectorAll(".btn")
const slider = document.querySelector(".img-container")
let counter = 0
// selet both right and left button, add event listener
 buttons.forEach(function(button){
    button.addEventListener('click',() =>{
        if(button.classList.contains('btn-left')){
            counter --
            console.log(button)
            if(counter < 0){
                counter = pictures.length-1
            }
            slider.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        }
        
        if(button.classList.contains('btn-right')){

            counter++

            if(counter > pictures.length -1){
                counter = 0
            }else{
                slider.style.backgroundImage= `url('./img/${pictures[counter]}.jpeg')`
            }
            
        }
    })
 })
})();
