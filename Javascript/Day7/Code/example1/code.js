    class Employee
    {
    #empid=null;
    #ename=null;
    #grade=null;  
    #dept=null;
    static #noe=0; 
    #salary=0;

    // Get Set , Readonly , Writeonly ,read & Write Only
     get empid()  
    {
        return (this.#empid +1000);
    }
    set empid(val)
    {
        this.#empid=val;
    }
    set salary(val)
    {
        this.sal=val;
    }
    get salary()
    {
        return this.sal;
    }
    
    constructor(empid,ename,salary,dept="Not Assigned") // Overloading Of constructor
    {  
        
        if(dept===undefined)
        {
        this.#empid=empid;
        this.#ename=ename;
        this.#salary=salary;
        this.#dept="Not Assigned";
        }
        else
        {
            this.#empid=empid;
            this.#ename=ename;
            this.#salary=salary;
            this.#dept=dept;
        }
        
        console.log('default cons');
        Employee.#noe++;
    }
    showDetails(val1, val2) // Overloading of Function
    {
        this.#calGrade();
        if(val1==true && val2===undefined)
        {
        console.log("NOE:"+Employee.#noe);
        console.log(this.#empid+" "+this.#ename+" "+this.#dept+" "+this.#grade+" "+this.#salary);
        }
        else if(val1==undefined && val2==undefined)
        {
            console.log(this.#empid+" "+this.#ename+" "+this.#dept+" "+this.#grade+" "+this.#salary);   
        }
        else if(val1==true && val2!=undefined)
        {

        }
    }
    
    #calGrade()
    {
        if(this.sal>10000)
        this.#grade='A';
        else
        this.#grade='B';
    }
    static showNoe()
    {
        console.log("No of Employees:"+Employee.#noe);
    }
}


class PermEmployee extends Employee
{
    no_leaves;
    constructor(empid,ename,sal,dept,nol)
    {
         super(empid,ename,sal,dept);
         this.no_leaves=nol;
       
    }
    showDetails()
    {   super.showDetails();
        console.log(" No of leaves:"+this.no_leaves);  
    }
    
}
let emp1=new PermEmployee(1001,"Jack",30000,"HR",21);
emp1.showDetails();
emp1.empid=1001;
emp1.salary=3000;
emp1.no_leaves=21;
console.log(emp1.empid+" "+emp1.ename+ " "+emp1.no_leaves)
