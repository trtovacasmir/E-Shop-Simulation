const params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(id);

const BASE_URL="https://fakestoreapi.com/products"

const det_card = document.querySelector('.det_card')

async function productOne() {
    let data = await fetch(`${BASE_URL}/${id}`)
    let response = data.json()
    return response
}
productOne().then((response) => {
    console.log(response)
    det_card.innerHTML = ''


        let card = document.createElement('div')
        card.className = 'div_card'
       
        let name = document.createElement('p')
        name.innerText =response.title;
        name.className = 'api_name'

        let image = document.createElement('img')
        image.src = response.image
        image.className = 'api_image'

        let price = document.createElement('p')
        price.innerText = `${response.price}$`
        price.className = 'p'
        price.style.fontSize = '17px'
        price.style.color = '#36577f'
        price.style.fontWeight='bold';

        let description = document.createElement('p')
        description.innerText = response.description;
        name.className = 'des'

        card.appendChild(name)
        
        card.appendChild(image)
        card.appendChild(price)
        card.appendChild(description)
     
        det_card.appendChild(card)
})