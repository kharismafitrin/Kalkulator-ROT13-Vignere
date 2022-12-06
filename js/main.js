var encryptFlag = true; // true = enkripsi , false = dekripsi
var printObject = {     // menyimpan objek"
    finalResult: []     // menyimpan output
}

function inputHandler(proses)  
{
    var textInput = document.getElementById("text").value;      // untuk mengambil input dari form
    var textInputV = document.getElementById("textV").value;
	var keyInput = document.getElementById("key").value;
    var textInputRV = document.getElementById("textRV").value;
	var keyInputRV = document.getElementById("keyRV").value;
	var textOutput = "";                                        // untuk menyimpan output

    // untuk vigenere
    if(proses == "vigenere"){     
        if (!checkInput(textInputV) || !checkInput(keyInput) || !isAllAlphabets(keyInput)) {
            document.getElementById("inputError").style.display = "block";
            document.getElementById("hasil").style.display = "none";
            clearResult();
            return;
        }                                  
        console.log(textInputV);
        console.log(keyInput);                                    
        if (encryptFlag) {                                          
            textOutput = Vigenere.encrypt(textInputV, keyInput);
        } else {
            textOutput = Vigenere.decrypt(textInputV, keyInput);
        }
    }
    // untuk rot13
    else if(proses == "rot13"){
        if (!checkInput(textInput)) {
            document.getElementById("inputError").style.display = "block";
            document.getElementById("hasil").style.display = "none";
            clearResult();
            return;
        }
        console.log(textInput);                                      
        if (encryptFlag) {
            textOutput = ROT13.encrypt(textInput);
        } else {
            textOutput = ROT13.decrypt(textInput);
        }
    }
    // untuk rot13vigenere
    else if(proses == "rot13vigenere"){
        if (!checkInput(textInputRV) || !checkInput(keyInputRV) || !isAllAlphabets(keyInputRV)) {
            document.getElementById("inputError").style.display = "block";
            document.getElementById("hasil").style.display = "none";
            clearResult();
            return;
        }
        console.log(textInputRV);
        if (encryptFlag) {
            const rot13 = ROT13.encrypt(textInputRV);
            textOutput = Vigenere.encrypt(rot13, keyInputRV);
        } else {
            const vigenere = Vigenere.decrypt(textInputRV, keyInputRV);
            textOutput = ROT13.decrypt(vigenere);
        }
    }
    printObject.finalResult = textOutput;
    generateAnswerPage();
    console.log(textOutput)
    return textOutput;
}

function generateAnswerPage(){
    document.getElementById("inputError").style.display = "none";
    document.getElementById("hasil").style.display = "block";
    document.getElementById("finalResult").innerHTML = printObject.finalResult;
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

function setEncryptFlag(flag){
    encryptFlag = flag;
}

function checkInput(str){
    if(str == ""){
        return false;
    }
    else{
        return true;
    }
}