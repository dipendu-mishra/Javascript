// What you have
var officers = [
    { id: 20, name: 'Captain Piett',dept:"HR",salary:10000 },
    { id: 24, name: 'General Veers',dept:"HR",salary:20000 },
    { id: 56, name: 'Admiral Ozzel',dept:"Sales",salary:30000 },
    { id: 88, name: 'Commander Jerjerrod', dept:"Sales",salary:20000 }
  ];
  officers.push({id: 66, name: 'Harry', dept:"Sales",salary:20000})

  let tbody = document.getElementById('tbody');
  let tr = "<tr>";
  
  officers.forEach(emp =>
  {
      tr += "<td>" + emp.id + "</td><td>" + emp.name + "</td><td>" + emp.dept + "</td> </tr>";    
  });
  
  tbody.innerHTML = tr;
  officers.push({id: 88, name: 'Commander Jerjerrod', dept:"Sales",salary:20000})