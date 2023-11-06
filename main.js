const menuToggle = document.querySelector('.btn__toggle');
const menuList = document.querySelector('.navbar');
const productSelected = document.querySelector('.products__cards');
const lastProducts = document.querySelector('.lastProducts__cards');

const products = [
    {
        name: 'Product 1',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '500,00',
        image: '/images/products/product-5.png'
    },
    {
        name: 'Product 2',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '350,00',
        image: '/images/products/product-6.png'
    },
    {
        name: 'Product 3',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '900,00',
        image: '/images/products/product-7.png'
    },
    {
        name: 'Product 4',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '12.000,00',
        image: '/images/products/product-8.png'
    }
]

const lastUnits = [
    {
        name: 'Product 5',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '7.000,00',
        image: '/images/products/product-9.png'
    },
    {
        name: 'Product 6',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '250,00',
        image: '/images/products/product-10.png'
    },
    {
        name: 'Product 7',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '3.000,00',
        image: '/images/products/product-11.png'
    },
    {
        name: 'Product 8',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '3.500,00',
        image: '/images/products/product-12.png'
    },
    {
        name: 'Product 9',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '600,00',
        image: '/images/products/product-13.png'
    },
    {
        name: 'Product 10',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '4.000,00',
        image: '/images/products/product-14.png'
    },
    {
        name: 'Product 11',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '2.000,00',
        image: '/images/products/product-15.png'
    },
    {
        name: 'Product 12',
        rate: '&#9733;&#9733;&#9733;&#9733;&#9734;',
        price: '3.800,00',
        image: '/images/products/product-1.png'
    }
]



menuToggle.addEventListener("click", () => {
    menuList.classList.toggle('active')
})


products.forEach( product => criarCard(product, productSelected));

lastUnits.forEach( product => criarCard(product, lastProducts));


function addCard (card, section) {
   section.innerHTML += card
}

function criarCard(objeto, section) {
    const card = `
    <div class="cards">
        <img src="${objeto.image}" alt="">
        <p class="produtcs__nome">${objeto.name}</p>
        <p class="rate">${objeto.rate}</p>
        <p class="produtc__price">${objeto.price} <span>R$</span></p>

    </div>
    `
    addCard(card, section);
}

let total = 0;

let  productList = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'
]


for (var i =0; i < productList.length; i++){
    let product = productList[i].indexOf(':');
    let productName = productList[i].slice(0, product - 1);
    let price = Number(productList[i].slice(product +1));
    let finalProduct = productName + ' - ' + '$' + price;
    total += price
    console.log(finalProduct);
}

console.log('Total - $' + total.toFixed(2))

