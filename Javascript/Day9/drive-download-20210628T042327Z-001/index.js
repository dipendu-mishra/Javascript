
let draggables = document.querySelectorAll('.draggable');
let textBoxes = document.getElementsByClassName('dropDiv');
let dragging=null;
let droppedCorrect=false;
let draggingClass="";

for (draggable of draggables) {
      
      draggable.addEventListener('dragstart', (e) => {
            console.log('drag started');
            
            dragging=e.target;
            draggingClass=dragging.classList.value;
            droppedCorrect=false;

            e.target.classList.add('hold');
            setTimeout(() => {
                  e.target.className='hide';
            }, 0);
      });

      
      draggable.addEventListener('dragend', (e) => {
            console.log("drag ended");
            if(droppedCorrect==false)
              { e.target.className = draggingClass; }
            else
              { e.target.className='hide'; }
      });
}


      for (textBox of textBoxes) {
            
            textBox.addEventListener('dragover', (e) => {
                  console.log('dragover');
                  e.preventDefault();
            });

            textBox.addEventListener('dragenter', (e) => {
                  console.log('dragenter');               
            });

            textBox.addEventListener('dragleave', (e) => {
                 console.log('drag left');
            });

            textBox.addEventListener('drop', (e) => {
                  console.log(e.target.classList.value,draggingClass);  
                  if(e.target.classList.value.indexOf("fix")==-1)
                   {
                   if(draggingClass.indexOf("catg1")>=0 && e.target.classList.value.indexOf("catg1")>=0)
                   {
                  //console.log(dragging.classList.value)
                  e.target.innerHTML=dragging.value;
                  e.target.className+=" fix"; 
                  droppedCorrect=true;
                   }
                   
                  else if(draggingClass.indexOf("catg2")>=0 && e.target.classList.value.indexOf("catg2")>=0)
                  {
                  //console.log(dragging.classList.value)
                  e.target.innerHTML=dragging.value;
                  e.target.className+=" fix"; 
                  droppedCorrect=true;
                  }
                  }
            });
      }
 