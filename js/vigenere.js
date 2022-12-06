const Vigenere = {
  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let nonAlphabet = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (this._checkAplhabet(char)) {
        const plain25 = (char.charCodeAt(0) - 65);
        const key25 = (key[(i - nonAlphabet) % key.length].charCodeAt(0) - 65);
        const temp =  this._mod26(plain25 + key25)
        char = String.fromCharCode(temp+65);
      } else {
        nonAlphabet++;
      }
      result.push(char);
    }
    return result.join('');
  },

  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    
    let result = [];
    let nonAlphabet = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (this._checkAplhabet(char)) {
        const plain25 = (char.charCodeAt(0) - 65);
        const key25 = (key[(i - nonAlphabet) % key.length].charCodeAt(0) - 65);
        const temp =  this._mod26(plain25 - key25)
        char = String.fromCharCode(temp+65);
      } else {
        nonAlphabet++;
      }
      result.push(char);
    }
    return result.join('');
  },

  _mod26(num) {
    while (num < 0) {
      num += 26;
    }
  
    return num % 26;
  },
  
  _checkAplhabet(char) {
    return (/[a-zA-Z]/).test(char);
  }
}