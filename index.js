var cart = [];

function getCart() {
 return cart;
}
//cart is a nested data structure, so, something like
// cart = [
//    {
//      itemName: 'bananas',
//      itemPrice: 17
//    },
//    {
//      itemName: 'eggs',
//      itemPrice: 49
//    }
//]
//so, each key-value pair is in an entirely separate object in the array,
//hence, why we can have more than one key with the same name: they're not in
//the same object

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push(//construct object here, which might necessitate a helper function?)

}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

//Helpers 

function makeCartItem() {
  //code that creates two key-value pairs, which we use in addToCart 
}