



let array1=["nit", "cmirit","srm","Dayanamda","NItte"]

function onloadForm()
{
let college=document.getElementById("college");

              ele = document.createElement('option');
              ele.value ="Select";
              ele.innerHTML = "Select";
              college.appendChild(ele);


             array1.forEach(element => {
              ele = document.createElement('option');
              ele.value = element;
              ele.innerHTML = element;
              college.appendChild(ele);
             });

             ele = document.createElement('option');
              ele.value ="Others";
              ele.innerHTML = "Others";
              college.appendChild(ele);
            }


