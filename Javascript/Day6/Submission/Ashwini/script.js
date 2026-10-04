let selectedRow = null;
function formSubmit() {
      //fun  call to read form data
      let formData = readFormData();
      console.log(formData);
      if (selectedRow == null) {
            //fun call to insert new record in table 
            insertNewRecord(formData);
      }
      else {
            // function call to update record
            updateRecord(formData);
      }
      resetForm();
}

function readFormData() {
      let formData = {};
      formData['fullName'] = document.getElementById('fullName').value;
      formData['empCode'] = document.getElementById('empCode').value;
      formData['salary'] = document.getElementById('salary').value;
      formData['city'] = document.getElementById('city').value;
      // console.log(typeof(formData));
      return formData;
}

// insert new records in table
function insertNewRecord(data) {
      let table1 = document.getElementById('myTable');
      // create new row 
      let newRow = table1.insertRow(table1.length);
      // create new cells and insert data
      let cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.fullName;
      let cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.empCode;
      let cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.salary;
      let cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.city;
      let cell5 = newRow.insertCell(4);
      cell5.innerHTML = `<a class="anchor" onclick="edit(this)">Edit</a>
                   <a class="anchor" onclick="dlt(this)">Delete</a>`;
}

function resetForm() {
      document.getElementById('fullName').value = '';
      document.getElementById('empCode').value = '';
      document.getElementById('salary').value = '';
      document.getElementById('city').value = '';
}

function edit(td) {
      selectedRow = td.parentElement.parentElement;
      // console.log(selectedRow);
      document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
      document.getElementById('empCode').value = selectedRow.cells[1].innerHTML;
      document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
      document.getElementById('city').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(data) {
      // console.log(data);
      selectedRow.cells[0].innerHTML = data.fullName;     //or formData["fullName"]
      selectedRow.cells[1].innerHTML = data.empCode;
      selectedRow.cells[2].innerHTML = data.salary;
      selectedRow.cells[3].innerHTML = data.city;
}

function dlt(td) {
      if (window.confirm('Are you sure you want to delete this record?')) {
            let row = td.parentElement.parentElement;
            document.getElementById('myTable').deleteRow(row.rowIndex);
            resetForm();
      }
}