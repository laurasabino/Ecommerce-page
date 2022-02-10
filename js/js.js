// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// open cart
cartIcon.onclick = () =>{
    cart.classList.add("active")
};
// close cart

closeCart.onclick = () =>{
    cart.classList.remove("active")
};


// Card working

if (document.readyState == 'loading') {
    document=addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

// Making functional

function ready(){

    //reomve items from car
    var reomveCartButtom = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtom)
    for(var i = 0; i < reomveCartButtom.length; i++){
        var button = reomveCartButtom[i]
        button.addEventListener('click', removeCartItem)
    }

    // Changes in quantity
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);

    }
}
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal();
}
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) |input.value <= 0) {
        input.value = 1;
    }

}
// update total

function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;

        document.getElementsByClassName("total-price")[0].innerText="$" + total;
   }
}

