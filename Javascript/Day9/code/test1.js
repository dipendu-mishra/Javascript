let newid=1;
function addMore()
{
    let getPhoneDiv=document.querySelector(".phone");
    let newph=document.createElement("input");
    newph.setAttribute("type","text");
    newph.setAttribute("size","10");
    
    newph.setAttribute("id","t"+newid); 

    getPhoneDiv.appendChild(document.createElement("br")) ; //1
    getPhoneDiv.appendChild(document.createTextNode("Mobile No:")) ;//2
    getPhoneDiv.appendChild(newph); //3

    let newbut=document.createElement("input");

    newbut.setAttribute("type","button");
    newbut.setAttribute("id","b"+newid);
    newbut.setAttribute("value","-");
    
    newbut.addEventListener('click',(e)=>{
        console.log("target:"+e.target.id);
        e.target.remove(this);
        let textboxid="t"+e.target.id.substr(1);
        console.log(textboxid);
        let ele=document.getElementById(textboxid);
        let pele=document.getElementById(textboxid).parentNode;        
        pele.removeChild(ele.previousSibling.previousSibling); // Remove Break
        pele.removeChild(ele.previousSibling);// Removing Mobile No:
        pele.removeChild(ele)        
    });

    getPhoneDiv.appendChild(newbut);// 4
    newid++;    
}

