
class SalaryRange extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "SalaryRange"; // (2)
  }
}

//TypeError: Assignment to constant variable.
try
{
// const name1 = "Jules";
// //name1 = "Caty";
// console.log("one");
// //var num = 234; num.substr(1,1); // substr is not function 
// const arr=[1,2,3];
// //arr.length=121**98;
// let z=x++;
// console.log(arr)
// console.log("two");
let salary=-30030;
if(salary<10000)
   throw new SalaryRange("Salary should be between 10000 and 80000");
let da=salary*.3;
console.log("da:"+da);
}
catch(error)
{
  if(error instanceof TypeError )
  console.error("Type Error=>"+error.name+" "+error.message);
  else if(error instanceof RangeError )
  console.error("Ref Error=>"+error.name+" "+error.message);
  else if(error instanceof SalaryRange )
  console.error( error.name+" "+error.message);
  else 
  console.error("Other error:=>"+error.name+" "+error.message);
}
finally
{
  console.log('Done. Good Job')
}
console.log("Thank You");
