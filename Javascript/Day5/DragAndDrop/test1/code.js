console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');  // return firt element
const whiteBoxes = document.getElementsByClassName('whiteBox');  // retutn array


imgBox.addEventListener("dragstart",()=>{
    console.log("Drag Start");    
   });
imgBox.addEventListener("dragenter",()=>{
    console.log("Drag Enter");    
   });

imgBox.addEventListener("dragover",()=>{
    console.log("Drag Over");    
   });

// imgBox.addEventListener("drag",()=>{
//     console.log("Drag ");    
//    });

imgBox.addEventListener("dragleave",()=>{
    console.log("Drag Leave");    
   });  
// Where to drop not created yet
imgBox.addEventListener("drop",()=>{
    console.log("Drag Drop");    
   });

imgBox.addEventListener("dragend",()=>{
    console.log("Drag End");    
   }); 
   
// Event listeners for draggable element imgBox

/*
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});
*/
// for (whiteBox of whiteBoxes) {
//     whiteBox.addEventListener('dragover', (e) => {
//         //e.preventDefault();
//         console.log('DragOver ..');
//     });
/*
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered',e);
        e.target.className = 'whiteBox'
    });

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    });
    */
//}

