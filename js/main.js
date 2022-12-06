var encryptFlag = true;
var printObject = {
    finalResult: []
}

function inputHandler(proses)
{
    var textInput = document.getElementById("text").value;
    var textInputV = document.getElementById("textV").value;
	var keyInput = document.getElementById("key").value;
    var textInputRV = document.getElementById("textRV").value;
	var keyInputRV = document.getElementById("keyRV").value;
	var textOutput = "";

    if(proses == "vigenere"){
        // if (!keyInput || !keyValue || !isAllAlphabets(keyInput)) {
        //     clearResult();
        //     return;
        // }
        console.log(textInputV)
        if (encryptFlag) {
            textOutput = Vigenere.encrypt(textInputV, keyInput);
        } else {
            textOutput = Vigenere.decrypt(textInputV, keyInput);
        }
    }else if(proses == "rot13"){
        if (encryptFlag) {
            textOutput = ROT13.encrypt(textInput, keyInput);
        } else {
            textOutput = ROT13.decrypt(textInput, keyInput);
        }
    }else{
        // if (!keyInput || !keyValue || !isAllAlphabets(keyValue)) {
        //     clearResult();
        //     return;
        // }

        if (encryptFlag) {
            const vigenere = Vigenere.encrypt(textInputRV, keyInputRV);
            textOutput = ROT13.encrypt(vigenere);
        } else {
            const rot13 = ROT13.decrypt(textInputRV);
            textOutput = Vigenere.decrypt(rot13, keyInputRV);
        }
    }
    printObject.finalResult = textOutput;
    generateAnswerPage();
    console.log(textOutput)
    return textOutput;
}

function generateAnswerPage(){
    document.getElementById("finalResult").innerHTML = printObject.finalResult;
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
    const result = document.querySelector('#finalResult');
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
    result = document.querySelector('#finalResult');
    result.innerHTML = "";
}

function setEncryptFlag(flag){
    encryptFlag = flag;
}