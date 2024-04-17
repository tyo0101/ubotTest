import * as checkAccount from './checkAccount.js';
import * as checkAccount2 from './checkAccount2.js';


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('NumberForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputContent = document.getElementById('NumberInput').value;
        const char = inputContent.charAt(3);
        const char2 = inputContent.charAt(4);
        const suJect = inputContent.substring(3, 5);
        const firstThreeChars = inputContent.substring(0, 3);

        if(char === '2' && char2 === '0')
        {
        const checksum2 = checkAccount2.validateAccount(inputContent);
        console.log(checksum2)
        }else if(firstThreeChars >= '001' && firstThreeChars <= '007' && (suJect === '30' || suJect === '40' || suJect === '66')){
          const checksum2 = checkAccount2.validateAccount(inputContent);
        console.log(checksum2)
        }else{
          const checksum = checkAccount.validateAccount(inputContent);
          console.log(checksum)
        }
    });
});