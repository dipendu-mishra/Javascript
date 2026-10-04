var numbers = [65, 44, 12, 4];
let arr1=numbers.forEach((item, index, arr) =>  arr[index] = item * 10);
console.log(arr1);

arr=null;
item=null;

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
numbers.forEach(myFunction);
console.log(numbers);


numbers.forEach((item,index,arr) => {
    arr[index] = item * 10;

});



console.log(numbers);




// Single Used Object ES6 Code

let lib = {
    x:10,
    sum(a, b)  { return a + b; },
    mult(a, b) { return a * b; }
  };
  
  console.log( lib.x,lib.sum(2, 3) );  // 5
  console.log( lib['x'], lib.mult(2, 3) ); // 6

  // ES6 code with Arrow Function
 lib = {
    x:10,
    sum:  (a, b) => {z=a*b+10},
    mult: (a, b) => a * b
  };
  
  console.log( lib.sum(2, 3) );  // 5
  console.log( lib.mult(2, 3) ); // 6

  let person={
      name:"Jack",
      empid:1001,
      dept:"hr",
      salary:20000      
  }
  for (var property in person) {
    console.log(property,":",person[property]);
}


/* new options with IE6: loop through array of objects */
const people = [
    {id: 100, name: 'Vikash'},
    {id: 101, name: 'Sugam'},
    {id: 102, name: 'Ashish'}
  ];
  
  // using for of
  for (let person of people) {
    console.log(person.id + ': ' + person.name);
  }

  
  // using forEach(...)
  people.forEach(person => {
   console.log(person.id + ': ' + person.name);
  });
  
  
  // forEach(...) with index
  people.forEach((person, index) => {
   console.log(index + ': ' + person.name);
  });
 
  
  let users = [
   {
     id:1,
     name:"king"
   },
   {
     id:2,
     name:"john"
   },
  {
    id:3,
    name:"gowtham"
  }
]
users[0].id=44;
users.push({id:23,name:'Tom'});
users.pop(2);
users.forEach((user)=>console.log(user.id,user.name));

for (let user of users) {
    console.log(user.id + ': ' + user.name);
  }