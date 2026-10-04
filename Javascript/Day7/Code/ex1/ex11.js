class Employee
{
  empno;
  ename;
  salary;
  static noe;


}







class Employee{
    #empid=0;    
    dname=null;
    static noe=0;
    grade='';
    #calGrade()
    {
      if(this.salary>30000)
        this.grade='A';
      else
        this.grade='B';
    }


    constructor(empid,ename,dept='sales',salary)  // default values
    {
        if(salary!==undefined)
        {
      this.#empid=empid;this.ename=ename;
      this.dept=dept;
      this.salary=salary;
      Employee.noe++;
        }
        else
        {
            this.#empid=empid;this.ename=ename;
            this.salary=salary;
            this.dept=dept;          
            Employee.noe++; 
        }
    }

    getDetails()
    {
    this.#calGrade();
    console.log(Employee.noe+" "+this.#empid+" "+this.ename+" "+this.dept+" "+this.salary+" "+this.grade)
    }
}
let emp1=new Employee(1001,"Tom");
let emp2=new Employee(1001,"Tom","HR");
let emp3=new Employee(1001,"Tom","Marketing",50000);
let emp4=new Employee(1001,salary=50000,ename="Jack",dept="HR") // named arguments
// emp1.salary=emp1.salary+3000;
// emp1["ename"]="Jack";
// //this.#empid=3456;
// //emp1.#calGrade();
// emp1.getDetails();
// let emp2=new Employee(1001,"Tom");
// emp2.getDetails();
// let emp3=new Employee(1001,"Tom");
emp4.getDetails();