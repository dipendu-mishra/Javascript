class Employee{
  #empid;
  #ename;
  #gender;
  constructor(empid,ename,gender)
  {
    this.#empid=empid;
    this.#ename=ename;
    this.#gender=gender;
  }

  get ename() // read
  {
   return "Mr."+this.#ename;
  }
  get empid()
  {
    return eval(this.#empid+1000);
  }
  set ename(val)
  {
    this.#ename=val;
  }

}
let emp1=new Employee(1001,"Jack","M");
//console.log(emp1.show());
emp1.ename="Tom";
console.log(emp1.empid+ " "+emp1.ename);

