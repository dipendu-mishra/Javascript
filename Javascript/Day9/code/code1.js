
function findOfficer()
{
   
    let bonus1 = officers.map(function (officer) {
        return officer.salary*.2;
      });
      
      let arr = [100, 200, 300, 400]
      arr.map(function(element, index, array){
        console.log(element);
        console.log(index);
        console.log(array);            
    });  

    let bonus2=officers.map((officer)=>eval(officer.salary*.2));
    console.log(bonus2);

    let bonusdet1=[];
    bonusdet1=officers.map(function (officer) {
        return [officer.id,eval(officer.salary*.2)];
      });
      console.log(bonusdet1);

    let bonusdet2=[];
      bonusdet2=officers.map((officer)=> {
          return [officer.id,eval(officer.salary*.2)];
        });
        console.log(bonusdet2);
        
       

        
          // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
    //  tdata = document.getElementById('findDetails');
    
    // console.log(data, typeof data);


    // data.forEach((eee,index) =>
    //     {   tr = "<tr>";
    //         tr += "<td>" + eee[index]+ "</td></tr>";    
    //     });
    // tdata.innerHTML = tr;
}

    
