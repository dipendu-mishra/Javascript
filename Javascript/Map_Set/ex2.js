// Araay of Array as key value
let array1=[
  ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['occupation', 'Jedi Knight'],
];
// Array to Map
const mp = new Map(array1);
//console.log(mp)
// mp.forEach((values,keys)=>{
//   document.write(values+" is "+keys+"<br>")
// })

let array2={
  firstName: 'Luke',
  lastName: 'Skywalker',
  occupation: 'Jedi Knight',
};
//Object to Map
const mp1=new Map(Object.entries(array2)) ;
//console.log(mp1);

// How to Iterate Map
mp.forEach((value,key)=>{
  document.write(value+" is "+key+"<br>")
})

document.write('***********************<br>');
mp1.forEach((value,key)=>{
  document.write(value+" is "+key+"<br>")
})

//The following converts a Map to an Object:
const obj = Object.fromEntries(mp)
console.log(obj);

// Now, let's convert a Map to an Array:
const arr = Array.from(mp)
console.log(arr);




