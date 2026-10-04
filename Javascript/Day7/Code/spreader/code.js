const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack


//Copy Array Using Spread Operator
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

 
arr1[0]='seven';
console.log(arr1,arr2);
//  Output:
//  ["one", "two", "three", "four", "five"]


//Clone Array Using Spread Operator
let arr11 = [ 1, 2, 3];
let arr22 = arr11;

arr11[2]=34;
console.log(arr11); // [1, 2, 3]
console.log(arr22); // [1, 2, 3]

