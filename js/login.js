//Funkcija koju prosledjujemo buttonu i koja klikom pruzima podatke sa inputa i salje podatke iz ovih polja
function Login() {
   

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: username,
        password: password
    })
})
    .then(res=>res.json())
    .then(json=>{
        sessionStorage.setItem("user",json.token);
        console.log(json)
        window.location.href = "index.html";
        // setTimeout(function(){ // pričekajte 3 sekunde prije ponovnog učitavanja stranice
        //     window.location.reload(); // ponovo učitajte stranicu nakon prijave kako biste ažurirali prikaz dugmadi
        // }, 3000);
    })
   
}


function Logout(){
    
    sessionStorage.removeItem("user");
    window.location.reload();
    
  }
  

let login = document.querySelector('.login')

let logout = document.querySelector('.logout')
const token = sessionStorage.getItem('user');
console.log(token);
console.log(token)

if(token!==null){
    logout.style.display = 'inline';
    login.style.display = 'none';
}else{

     login.style.display = 'inline';
     logout.style.display = 'none';

}

window.addEventListener('storage', function(e) {
    if (e.key === 'user') {
        if (sessionStorage.getItem('user') !== null) {
            // korisnik je prijavljen, prikazujemo dugme za odjavu, a sakrivamo dugme za prijavu
            login.style.display = 'none';
            logout.style.display = 'inline';
        } else {
            // korisnik je odjavljen, prikazujemo dugme za prijavu, a sakrivamo dugme za odjavu
            login.style.display = 'inline';
            logout.style.display = 'none';
        }
    }
});
