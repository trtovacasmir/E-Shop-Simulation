const container = document.querySelector('.container')
 const BASE_URL="https://fakestoreapi.com/"
async function getProducts() {
    let data = await fetch(BASE_URL+'products')
    let response = data.json()
    return response
}
getProducts().then((response) => {
    console.log(response)
    container.innerHTML = ''
    response.forEach(element => {
       let card = document.createElement('div')
       card.className = 'div_card'
       
        let name = document.createElement('div')
        name.innerHTML = `<p>${element.title}</p>`
        name.className = 'api_name'

        let image = document.createElement('img')
        image.src = element.image
        image.className = 'api_image'

        let price = document.createElement('p')
        price.innerText = `${element.price}$`
        price.className = 'p'
        price.style.fontSize = '17px'
        price.style.color = '#36577f'
        price.style.fontWeight='bold';

            card.addEventListener('click',()=> {
            window.location.href=`detalji.html?id=${element.id}`;
        })


        card.appendChild(name)
        card.appendChild(image)
        card.appendChild(price)
        container.appendChild(card)


    
    });
})





















let category = document.getElementById("category");
  console.log(category)
  category.addEventListener("change", function() {
    var selectedOption = category.options[category.selectedIndex].value;
    console.log(selectedOption);




    async function getCategory() {
        let data = await fetch(`https://fakestoreapi.com/products/${selectedOption}`)
        let response = data.json()
        return response
    }
    getCategory().then((response) => {
        console.log(response)
        container.innerHTML = ''

        response.forEach(element => {
            let card = document.createElement('div')
            card.className = 'div_card'
            
             let name = document.createElement('div')
             name.innerHTML = `<p>${element.title}</p>`
             name.className = 'api_name'
     
             let image = document.createElement('img')
             image.src = element.image
             image.className = 'api_image'
     
             let price = document.createElement('p')
             price.innerText = `Price: ${element.price}$`
             price.className = 'p'
             
     
             
             card.appendChild(name)
             card.appendChild(image)
             card.appendChild(price)
             container.appendChild(card)
         });
        
    })
    
  });





  fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))



let username = document.getElementById('username')
let password = document.getElementById('password')

fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: `${username.value}`,
                password: `${password.value}`
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


           



function Logout(){
    
    sessionStorage.removeItem("user");
    window.location.reload();
    window.location.href = "login.html";
}