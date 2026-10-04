// returns NodeList (static and live)
let fruits;
// fruits = document.querySelectorAll('.fruits');
// console.log(fruits.item(0));
// fruits.item(0).classList.add('apples')

fruits = document.querySelector('.abc');
//console.log(fruits);
const childFruit = fruits.children;
console.log(childFruit);

// returns HTMLCollection (using item method)
// fruits = document.getElementsByClassName('fruits');
// console.log(fruits.item(0));
// fruits.item(0).classList.add('apples')