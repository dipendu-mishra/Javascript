// access screen elements
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
// initialize empty string
let screenValue = '';
// get button text
for (item of buttons) {
      item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;
            console.log('Button text is ', buttonText);
            if (buttonText == 'X') {
                  buttonText = '*';
                  screenValue += buttonText;
                  screen.value = screenValue;
            }
            //   else if (buttonText == '&#247;') {
            //       buttonText = '/';
            //       screenValue += buttonText;
            //       screen.value = screenValue;
            //   }
            else if (buttonText == 'C') {
                  screenValue = "";
                  screen.value = screenValue;
            }
            
            else if (buttonText == '=') {
                  // evaluate expression
                  screen.value = eval(screenValue);
            }
            else {
                  screenValue += buttonText;
                  screen.value = screenValue;
            }
      });
}



