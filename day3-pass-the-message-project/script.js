let textInput = document.querySelector(".message-text")
        let message = document.querySelector(".text-entered")
        
         function submit() {
            // alert("you clicked")
            if(textInput.value===''){
                
                message.innerHTML= "please write down a message"
            }else{
                message.innerHTML = textInput.value;
            }
            
            textInput.value="";
         }