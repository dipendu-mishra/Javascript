let selectedRow = null;
// fun declaration on form submit
function formSubmit(){
      // fun call to read form data
      let formData = readFormData();
      //console.log(formData);
      insertRecord(formData);
      // if(selectedRow == null){
      //       // fun call to insert record
      //       insertRecord(formData);
      // }
      // else{
      //       // fun call to update data
      //       updateData(formData);
      // }
      // fun call to reset form
      resetForm();
}

// fun declaration to read form data
function readFormData(){
      // initialize empty object and access req ele.s
      let formData = {};     

      formData['roll'] = document.getElementById('roll').value;
      formData['name'] = document.getElementById('name').value;
      formData['dept'] = document.getElementById('dept').value;
      formData['salary'] = document.getElementById('salary').value;
      formData['dept1'] = document.getElementById('dept1').value;
      formData['salary1'] = document.getElementById('salary1').value;
      console.log(formData);
      return formData;
}

// fun declaration to insert data
function insertRecord(data){
     
      let table = document.getElementById('myTable');    
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      cell1.innerHTML = data.roll;
      let cell2 = row.insertCell(1);
      cell2.innerHTML = data.name;
      let cell3 = row.insertCell(2);
      cell3.innerHTML = data.dept;
      let cell4 = row.insertCell(3);
      cell4.innerHTML = data.salary;
      let cell5 = row.insertCell(4);
      cell5.innerHTML = `<button id="edit" class="btn btn-success" onclick = "edit(this)">Edit</button>
                         <button id="delete" class="btn btn-danger" onclick = "dlt(this)">Delete</button>`
}

// fun declaration to reset form
function resetForm(){
      // access form ele.s and set to empty value
      document.getElementById('roll').value = '';
      document.getElementById('name').value = '';
      document.getElementById('dept').value = '';
      document.getElementById('salary').value = '';
}

// fun declaration to edit selected row data
let editObj;
function edit(obj){
      // access tr and editorBox ele.s
      //console.log(td)
      editObj=obj;
      let selectedRow = obj.parentElement.parentElement;
      console.log(selectedRow);
      let editorBox = document.querySelector('.editorBox');
      editorBox.style.display = 'block';
      document.getElementById('dept1').value = selectedRow.cells[2].innerHTML;
      document.getElementById('salary1').value = selectedRow.cells[3].innerHTML;
      let inc = document.getElementById('inc').value = 0;
      document.getElementById('namediv').innerHTML= "Name :"+selectedRow.cells[1].innerHTML;
      
      
}
// fun declaration to update data
function updateData(data){
      selectedRow.cells[2].innerHTML = data.dept1;
      selectedRow.cells[3].innerHTML = data.salary1;
}

function addSalary()
{
     
     
      let newsalary=document.getElementById("salary1").value;
      let newdept=document.getElementById("dept1").value;
      console.log(newsalary)
      editObj.parentElement.parentElement.childNodes[3].innerHTML=newsalary;  
      editObj.parentElement.parentElement.childNodes[2].innerHTML=newdept; 
      let editorBox = document.querySelector('.editorBox');
      editorBox.style.display = 'none';            
      return false;
}
function cancelAdd()
{
      let editorBox = document.querySelector('.editorBox');
      editorBox.style.display = 'none';
      return false;
}
let deleteObj;
function dlt(obj)
{
      deleteObj=obj;
      deleteObj.parentElement.parentElement.remove();
      return false;

}

