let studentRecords = [ {name: 'John', id: 123, marks : 98, dept:'CSE' },
          {name: 'Tom', id: 101, marks : 23, dept:'CSE' },
          {name: 'Jack', id: 200, marks : 45 , dept:'ISE' },
          {name: 'Harry', id: 134, marks : 88 ,dept:'CSE'},
          {name: 'Potter', id: 155, marks : 56 , dept:'ISE'},
          {name: 'Brown', id: 178, marks : 75 ,dept:'ISE'},
          {name: 'Clerk', id: 141, marks : 22, dept:'CSE' },
          {name: 'Ford', id: 23, marks : 67 , dept:'ISE' },
          {name: 'James', id: 173, marks : 88 ,dept:'CSE'},
          {name: 'Hasan', id: 123, marks : 78 , dept:'ISE'},
          {name: 'Beery', id: 218, marks : 83 ,dept:'ISE'} ] 

let data=studentRecords.filter((stu)=>{stu.marks<80});
console.log(data);

data=studentRecords.filter(stu=> (stu.marks>70 && stu.marks<90) && stu.dept=='ISE');
console.log(data);

data=studentRecords.map( stu=>stu.name.toUpperCase() );
console.log(data);

data=studentRecords.map( stu => { return {name: stu.name.toUpperCase(), id: stu.id+100} })
console.log(data);

data=studentRecords.reduce(  ((acc,emp) => acc+emp.marks),0);
console.log(data);

data=studentRecords.reduce( ((maxmarks,stu) => maxmarks > stu.marks ? maxmarks : stu.marks ),0);
console.log(data);

// Find the sum of marks of CSE students having more that 50
data=studentRecords.filter(stu=>
    stu.marks>=50 && stu.dept=='CSE').map(stu=>
        stu.marks).reduce(((gtot,mark)=> gtot+mark),0);
console.log(data)

// Using map(), we add a grace of 15 marks to students who scored less than 50.
data=studentRecords.filter(stu=>stu.marks<50).map( stu=> stu.marks+15).reduce(((gt,m)=>gt+m),0);
console.log(data)


