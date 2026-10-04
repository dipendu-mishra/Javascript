class Employee{
    #empid=null;
    #grade=null;  
    static #noe=0; 
  
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
let emp1=new Employee(1001,"Tom",11000,"Sales");// Positioned argument with all values
emp1.showDetails();
let emp2=new Employee(1001,"Tom",3000); // Positioned argument with less values
emp2.showDetails();
let emp3=new Employee(1001,"Tom",dept='Marketing',sal=12000); // Named Argument
emp3.showDetails();
emp3["name"]="Dipendu";
emp3.showDetails();
//console.log(Employee.#noe)
//console.log(emp1.#empid)


