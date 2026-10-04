let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } 
          ] 

//Problem Statement: We are interested in retrieving only
//the name of the students and all the names should be in caps.

//1. Traditional for() loop 
let names = [];
for (let index = 0; index < studentRecords.length; index++){
    names.push(studentRecords[index].name.toUpperCase());
}
console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]
//2. for(...of) 

for (const obj of studentRecords) {
    names.push(obj.name.toUpperCase());
}
console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]
//   3. forEach()

studentRecords.forEach((student) => {  // callback mechanism
       names.push(student.name.toUpperCase());
})
console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]

let mobiles = studentRecords.map( (student) => student.mobileno);
console.log(mobiles);
