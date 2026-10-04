console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');  // return firt element
const whiteBoxes = document.getElementsByClassName('.whiteBox'); 

imgBox.addEventListener("dragstart",(e)=>{
    console.log("Drag Start");  
     e.target.className+=' hold';
    // //e.target.className='hide';
    setTimeout(()=>{
     e.target.className='hide'; },0);
   });
   

imgBox.addEventListener("dragend",(e)=>{
    console.log("Drag End"); 
    e.target.className='imgBox';   
   }); 
   
// imgBox.addEventListener("dragenter",()=>{
//     console.log("Drag Enter");    
//    });

// imgBox.addEventListener("dragover",()=>{
//     console.log("Drag Over");    
//    });

// // imgBox.addEventListener("drag",()=>{
// //     console.log("Drag ");    
// //    });

// imgBox.addEventListener("dragleave",()=>{
//     console.log("Drag Leave");    
//    });  
// // Where to drop not created yet
// imgBox.addEventListener("drop",()=>{
//     console.log("Drag Drop");    
//    });

for(whiteBox of whiteBoxes)
{
    whiteBox.addEventListener("dragover",(e)=>{
      e.preventDefault();
      console.log("Drag Over");
    });
    whiteBox.addEventListener("dragenter",(e)=>{
        console.log("Drag enter");
      });
    whiteBox.addEventListener("dragleave",(e)=>{
        console.log("Drag leave");
      });
    whiteBox.addEventListener("drop",(e)=>{
        console.log("Drop");
        e.target.append(imgBox);
      });
}