new Promise((resolve, reject) => {
    setTimeout(() => resolve("Error"), 2000); // change to reject
    
  });

  let x=new Promise((resolve, reject) => {
    setTimeout(() => resolve("abc"), 2000); // change to reject
    
  });

  /*************************************************************** */

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//             resolve({x:"a",y:"b"});
//     }, 2000);
// });

// promise.then(function(data) {
//     console.log(data.x,data.y);
// });

// promise.then(function(data1,data2) {
//     console.log(data1,data2);
// });

 /*************************************************************** */

// //With Multiple CallBacks
// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world');
//     }, 2000);
// });

// promise.then(function(data) {
//     console.log(data + ' 1');
// });

// promise.then(function(data) {
//     console.log(data + ' 2');
// });

// promise.then(function(data) {
//     console.log(data + ' 3');
// });


 /*************************************************************** */

// Chain of Then

//   let p = new Promise((resolve, reject) => {
   
//     setTimeout(resolve(10),1000);    
// });
// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// }).then((result) => {
//     console.log(result); // 20
//     return result * 3;
// }).then((result) => {
//     console.log(result); // 60
//     return result * 4;
// });


 /*************************************************************** */


// // When Error happen
// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Done');
//     }, 2000);
// });

// promise.then(function (data) {
//     console.log(data);
// }, function (data) {
//     console.error(data);
// });


//When Errors Happend wih Multiple Callbacks
// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('Error: No More');// fetch reject/resolev , URILFetch resolev/reject  , Read 
//     }, 2000);
// });

// promise.then(function success(data) {
//     console.log(data + ' 1');
// }, function error(data) {
//     console.error(data + ' 1');
// });

// promise.then(function success(data) {
//     console.log(data + ' 2');
// }, function error(data) {
//     console.error(data + ' 2');
// });

promise.then(function success(data) {
    console.log(data + ' 3');
}, function error(data) {
    console.error(data + ' 3');
});

//Calling Resolve Multiple Times
// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });

// promise.then(function success(data) {
//     console.log(data); resolve(
// });


// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');       
//     }, 1000);
    
// });

// promise.then(function success(data) {
//     console.log(data);
// });









// //Delay with a promise
// function delay(ms) {
//     // your code
//   }
  
//   delay(3000).then(() => alert('runs after 3 seconds'));

  




// const address = fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((user) => {
//     return user.address;
//   });

// const printAddress = () => {
//   address.then((a) => {
//     console.log(a);
//   });
// };

// printAddress();