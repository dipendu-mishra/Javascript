let newid=1;
function addMore()
{
  let getPhoneDIV=document.querySelector(".phone");
  let newph=document.createElement("input");
  newph.setAttribute("type","text");
  newph.setAttribute("size","10");
  newph.setAttribute("id",`t${newid}`);
  getPhoneDIV.appendChild(document.createElement("br"));
  getPhoneDIV.appendChild(document.createTextNode("Mobile No :"));
  getPhoneDIV.appendChild(newph);
  let newbut=document.createElement("input");
  newbut.setAttribute("type","button");
  newbut.setAttribute("id",`b${newid}`);
  newbut.setAttribute("value","-");
  newbut.addEventListener('click',remove); 
  getPhoneDIV.appendChild(newbut);
  newid++;
}
function remove(e)
{
    console.log(e,event.target);
    console.log(e.target.id);
    e.target.remove(this);
    let textboxid="t"+e.target.id.substr(1);
    console.log(textboxid);
    let ele=document.getElementById(textboxid);
    let pele=document.getElementById(textboxid).parentNode;
    pele.removeChild(ele);   
}