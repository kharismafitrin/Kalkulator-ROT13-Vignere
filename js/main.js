import ROT13 from './rot13.js';
import Vigenere from './vigenere.js';

var encryptFlag = true;
var printObject = {
    finalResult: []
}

function inputHandler()
{
	var inputText = document.getElementById("text").value;
	var inputKey = document.getElementById("key").value;
	var textOutput;

    var proses = document.getElementById("proses").value;

    if(proses == "vigenere"){
        if (!keyInput || !keyValue || !isAllAlphabets(keyValue)) {
            clearResult();
            return;
        }

        if (encryptFlag) {
            textOutput = Vigenere.encrypt(textInput.value, keyInput.value);
        } else {
            textOutput = Vigenere.decrypt(textInput.value, keyInput.value);
        }
    }

    else if(proses == "rot13"){
        if (!keyInput) {
            clearResult();
            return;
        }
        if (encryptFlag) {
            textOutput = ROT13.encrypt(textInput.value, keyInput.value);
        } else {
            textOutput = ROT13.decrypt(textInput.value, keyInput.value);
        }
    }

    else{
        if (!keyInput || !keyValue || !isAllAlphabets(keyValue)) {
            clearResult();
            return;
        }

        if (encryptFlag) {
            const vigenere = Vigenere.encrypt(textInput.value, keyInput.value);
            textOutput = ROT13.encrypt(vigenere);
        } else {
            const rot13 = ROT13.decrypt(textInput.value);
            textOutput = Vigenere.decrypt(rot13, keyInput.value);
        }
    }
    printObject.finalResult = textOutput;
    generateAnswerPage();
    return textOutput;
}

function generateAnswerPage(){
    $("#finalResult").append(printObject.finalResult);
}

// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('button');
//     buttons.forEach(button => {
//       button.addEventListener('click', function() {
//         const textInput = document.querySelector('#text') || false;
//         const keyInput = document.querySelector('#key') || false;
//         const textValue = textInput ? textInput.value : '';
//         const keyValue = keyInput ? keyInput.value : '';
  
//         if (!textInput || !textValue) {
//           clearResult();
//           return;
//         }
//         // VIGERENE 
//         if (this.getAttribute('name') === 'vigenere') {
//             if (!keyInput || !keyValue || !isAllAlphabets(keyValue)) {
//                 clearResult();
//                 return;
//             }
  
//             if (encryptFlag) {
//                 generateResult(Vigenere.encrypt(textInput.value, keyInput.value));
//             } else {
//                 generateResult(Vigenere.decrypt(textInput.value, keyInput.value));
//             }
//         } 
        
//         //ROT13
//         else if (this.getAttribute('name') === 'rot13') {
//             if (!keyInput) {
//                 clearResult();
//                 return;
//             }
  
//             if (encryptFlag) {
//                 generateResult(ROT13.encrypt(textInput.value, keyInput.value));
//             } else {
//                 generateResult(ROT13.decrypt(textInput.value, keyInput.value));
//             }
//         }

//         //ROT13+VIGENERE
//         else {
//             if (!keyInput || !keyValue || !isAllAlphabets(keyValue)) {
//                 clearResult();
//                 return;
//             }
    
//             if (encryptFlag) {
//                 const vigenere = Vigenere.encrypt(textInput.value, keyInput.value);
//                 generateResult(ROT13.encrypt(vigenere));
//             } else {
//                 const rot13 = ROT13.decrypt(textInput.value);
//                 generateResult(Vigenere.decrypt(rot13, keyInput.value))
//             }
//         }
//         });
//     })
//   });
  


const generateResult = (value) => {
    const result = document.querySelector('.result');
    result.innerHTML = `
      <label for="input_result">Result : </label>
      <input type="text" id="input_result" value='${value}' disabled>
      `;
}
  
function isAllAlphabets(str){
    for (let i = 0; i < str.length; i++) {
        if (!checkAplhabet(str[i])) return false;
    }

    return true;
}
  
function checkAplhabet(char) {
    return (/[a-zA-Z]/).test(char);
}
  
function clearResult(){
    result = document.querySelector('.result');
    result.innerHTML = ``;
}

function setEncryptFlag(flag){
    encryptFlag = flag;
}