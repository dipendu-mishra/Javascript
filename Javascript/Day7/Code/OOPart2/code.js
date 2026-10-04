class Employee{
    #empid=null;
    #grade=null;  
    static #noe=0; 
    get empid()
    {
        return this.#empid;
    }
    set salary(val)
    {
        this.sal=val;
    }
    get salary()
    {
        return this.sal;
    }
 
    constructor(empid,name,sal=1000,dept)
    {
        if(dept===undefined)
         {this.#empid=empid;this.name=name;this.dept="HR";this.sal=sal;}
        else
         {this.#empid=empid;this.name=name;this.dept=dept;this.sal=sal;}
        Employee.#noe++;
    }
    showDetails()
    {
        this.#calGrade();
        console.log("NOE:"+Employee.#noe);
        console.log(this.#empid+" "+this.name+" "+this.dept+" "+this.#grade+" "+this.sal);
    }
    #calGrade()
    {
        if(this.sal>10000)
        this.#grade='A';
        else
        this.#grade='B';
    }
}
class PermEmployee extends Employee{
    constructor(empid,name,sal=1000,dept,no_leaves){
        super(empid,name,sal,dept );
        this.noLeaves=no_leaves;
    }
    showDetails()
    {
        super.showDetails();
        console.log("No of Leaves:"+this.noLeaves);
    }
}

let emp1=new PermEmployee(1001,"Tom",11000,"Sales",21);// Positioned argument with all values
emp1.showDetails();
emp1.salary=2000;
console.log(emp1.empid+" "+emp1.salary)





// emp1.showDetails();
// let emp2=new Employee(1001,"Tom",3000); // Positioned argument with less values
// emp2.showDetails();
// let emp3=new Employee(1001,"Tom",dept='Marketing',sal=12000); // Named Argument
// emp3.showDetails();
// emp3["name"]="Dipendu";
// emp3.showDetails();
// console.log(Employee.#noe)
// console.log(emp1.#empid)


