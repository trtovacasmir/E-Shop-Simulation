const name1= document.getElementById('name').value
const last = document.getElementById('last').value
const email = document.getElementById('email').value
const address = document.getElementById('address').value
const username = document.getElementById('username').value
const password = document.getElementById('password').value
const number = document.getElementById('number').value

function addUser() {
    fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email:'John@gmail.com',
                username:'johnd',
                password:'m38rmFxxxxxx$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}
  
