let emp1={ '1':"Amit",1:'sumit', empno:1001,salary:40000};
//console.log(emp1);


// // Key support Multiple type of data
let x=100;
let mp=new Map();
mp.set('1','One');
mp.set(1,'Number one');
mp.set(true,'success');
mp.set(x," Hundred");
//console.log(mp.keys());
//console.log(mp)
//console.log(mp.get(1))

// console.log(mp.size)
// console.log(mp.get(1));
// console.log(mp.get('1'));
//Keys : Variable, Value, Reference Object

// let e1 = { ename: "John" , age:23 };

// let mp1=new Map();
// mp1.set(e1,20000);  // e1 is entries
// console.log(mp1);
// console.log(mp1.get(e1))

let e2 = { ename: "John" , age:23 };
let e3 = { ename: "Rose" , age:23 };// e3=e2
let e4 = { ename: "Priya" , age:23 };
let e5 = { ename: "Rohit" , age:23 };// e3=e2
let e6 = e5; // 

//Copying & Cloning
//let e7={ ename: e5.ename , age:e5.age};
// let e7=e5;
// e7.age=77;
// console.log(e7)
// console.log(e5);

let mp2=new Map();
mp2.set(e2,20000);  // e1 is entries
mp2.set(e3,30000);
mp2.set(e4,40000);
mp2.set(e5,50000);
mp2.set(e6,80000);

 //console.log(mp2);
 //console.log(mp2.size);
 for (let entry of mp2)
 { // the same as of recipeMap.entries()
  console.log(entry[0].ename, entry[1].age, entry[1]);
  //console.log(entry[0].ename); // cucumber,500 (and so on)
 }

 let dev_l1_cat1={ tech:"JAVA",exp:"3 Yrs"};
 let dev_l2_cat1={ tech:"JAVA",exp:"5 Yrs"};
 let dev_l1_cat2={ tech:"PHP",exp:"4 Yrs"};

 let mp4=new Map();
 mp4.set(e2,dev_l1_cat1);
 mp4.set(e3,dev_l1_cat2);
 mp4.set(e4,dev_l1_cat1);
 mp4.set(e5,dev_l2_cat1)

 for(let entry of mp4 )
 {
   //console.log(entry[0].ename,entry[1].tech);
 }
// consdev_l1_cat1ole.log(mp2.keys());
//
   

// console.log(mp2.get(e2))
// console.log(mp2.get(e3))
// console.log(mp2.get(e4))
// console.log(mp2.get(e5))

// for (let entry of mp2) { // the same as of recipeMap.entries()
//   console.log(entry); // cucumber,500 (and so on)
// }

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width,size} = options;
//  let title1=options.title;
//  let width1=options.width;


console.log(title);  // Menu
console.log(width);  // 100
console.log(size); //






