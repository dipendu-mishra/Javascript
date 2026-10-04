// retrieve element using querySelectorAll
const listItems_querySelector = document.querySelectorAll('li');
console.log('querySelector', listItems_querySelector);

// retrieve element using childNodes
const list  = document.querySelector('ul')
//console.log(list); // single object as Nodeelement
const listItems_childNodes = list.childNodes;
console.log('childNodes', listItems_childNodes);
listItems_childNodes.item(0).textContent="dddd";
const listItems_children = list.children;
console.log('children', listItems_children);
listItems_children.item(0).textContent="dddd";//


// const listItems_getElementsByTagName = document.getElementsByTagName('li');
// console.log('getElementsByTagName', listItems_getElementsByTagName);

console.log('*************************');
console.log('add one list item');
console.log('*************************');
let newEle=document.createElement('li');
list.appendChild(newEle);
newEle.textContent="abc"
newEle.setAttribute("id","new1")
let ulNodes=document.querySelectorAll("ul");
let ids=0;
ulNodes.forEach((element) => {
    element.setAttribute("type","square"); 
    if(element.getAttribute("id")==undefined)
         element.setAttribute("id",`${ids++}`);  
});

// for(var i = 0; i < ulNodes.length; i++){
//     ulNodes[i].style.backgroundColor = "green";
// }

let liNodes=document.querySelector("ul").childNodes;
console.log(liNodes);
liNodes.forEach(element => {    
    //if(element.nodeType== element.ELEMENT_NODE)
     //  element.textContent="changed";
});

//liNodes=document.querySelector("ul").children;
//console.log(liNodes);
// WIll not work
//liNodes.forEach(element => {    
    //if(element.nodeType== element.ELEMENT_NODE)
     //  element.textContent="changed";
   //});

for(var i = 0; i < liNodes.length; i++){
         liNodes[i].style.backgroundColor = "green";
     }


// console.log('querySelector', listItems_querySelector);
// console.log('childNodes', listItems_childNodes);
// console.log('children', listItems_children);
// console.log('getElementsByTagName', listItems_getElementsByTagName);

// console.log('*************************');
// console.log('add one more list item');
// console.log('*************************');
// listItems_getElementsByTagName[0].parentNode.appendChild(document.createElement('li'));

// console.log('querySelector', listItems_querySelector);
// console.log('childNodes', listItems_childNodes);
// console.log('children', listItems_children);
// console.log('getElementsByTagName', listItems_getElementsByTagName);