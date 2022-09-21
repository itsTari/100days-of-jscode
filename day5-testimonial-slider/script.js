(function(){
    const customerImg =document.querySelector('.client-img')
    const customerName =document.querySelector('.client-name')
    const customerText =document.querySelector('.client-text')
    const buttons = document.querySelectorAll('.btn')
    let  counter =  0
    const customers = []
    
    

    // create customers using the customer contructor

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }
    // create customers using the customer function

    function createCustomer(img, name, text){
        let fullImg = `./img/customer-${img}.jpg`
        let customer = new Customer(fullImg, name, text)

        // console.log(fullImg)

        customers.push(customer)
    }

    createCustomer(0, 'Philip', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Evan', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'Juan', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Pedro', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Khalid', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

    console.log(customers)
    
    buttons.forEach(function(button){
        button.addEventListener('click',() =>{
            if(button.classList.contains('left-btn')){
                if(counter === 0){
                    counter = customers.length
                }
                counter--
                customerImg.innerHTML = `<img src="${customers[counter].img}">`
                // customerImg.src = customers[counter].img
                customerName.textContent = customers[counter].name
                customerText.textContent = customers[counter].text

            }
            if(button.classList.contains('right-btn')){
                counter++
                if( counter === customers.length){
                    counter = 0
                }
                customerImg.innerHTML = `<img src="${customers[counter].img}">`
                // customerImg.src = customers[counter].img
                customerName.textContent = customers[counter].name
                customerText.textContent = customers[counter].text
            }
        })
    })

}) ()
