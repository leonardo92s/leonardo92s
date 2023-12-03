// script.js


const cartIcon = document.querySelector('header nav img');
const cartCount = document.getElementById('cart-count');


let itemCount = 0;


function addToCart() {
    itemCount++;
    updateCartCount();
}


function updateCartCount() {
    cartCount.textContent = itemCount;
}


cartIcon.addEventListener('click', function () {
  
    console.log('Cart icon clicked!');
});


const addToCartButtons = document.querySelectorAll('.btn');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
});
