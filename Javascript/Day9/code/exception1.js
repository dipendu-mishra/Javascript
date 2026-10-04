

// TypeError: Assignment to constant variable.
//const name1 = "Jules";
// name1 = "Caty";
// var num = 234; num.substr(1,1); // substr is not function 
// console.log('Thank You');
// //RangeError
// const arr = [90,88]
// arr.length=100**100;
// console.log(arr)

// ReferenceError
// let z=x+110;


//DecodeURI error
// var uri = "my test.asp?name=ståle&car=saab";
// var enc = encodeURI(uri);
// var dec = decodeURI(enc);
// var res = enc + "<br>" + dec;

// User Defined Error

class ValidationError extends Error {
    constructor(message) 
    {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }
  class ValidDept extends Error{
    constructor(msg)
    {
      super(msg);
      this.name="ValidateDept";
    }
  }
//



try{
  
  // let z=eval("f344f"*3);

  // let x=10;
  // let y=0;
  const z=200;
  //z=300;
  let xx=z+34*35;

  //let yy=zz+100;

  
  let salary=prompt("Enter salary:");
   if(salary<0 || salary >500000)
       throw new ValidationError("Salary should be between 0 and 500000")

  let dept="Security";
  if(dept!=="IT")
    throw new ValidDept("Dept is not valid , it showuld be HR , IT, TS, Laerdal, Product");
  // let zz=eval("34234ff"*3);
  // if(isNaN(zz))
  //   throw new TypeError("Eval Error");
  console.log("Remining statement in Try Block")
}
catch(error)
{
     //console.log("Error:"+err.name+"->"+err.message);
    if (error instanceof TypeError) {
       console.error('Type Error',error.name,error.message);
       
     }
     else if(error instanceof RangeError) {
        console.error('Range Error:',error.name,error.message);
       
     }
     else if(error instanceof EvalError) {
        console.error('Type Error' );
    }  
    // else if(error instanceof ReferenceError) {
    //     console.error('Reference Error: May be Object or varibale is not there or null value');
    // } 
   
    else if(error instanceof ValidationError)
        console.error(error.name+" "+error.message);
    else if(error instanceof ValidDept)
    {
      console.error(error.name+"->"+error.message);
    }
    //    console.error(error.name+":"+error.message)   ;
}

finally
{
    console.log('Succfully Ended');
    console.log('Closing the File opended');
    
}




  
  
  