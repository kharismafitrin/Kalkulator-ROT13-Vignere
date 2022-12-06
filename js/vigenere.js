const Vigenere = {
    encrypt(str, key) {
      str = str.toUpperCase();
      key = key.toUpperCase();
      
      let result = [];
      let nonAlphabet = 0;
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (this._checkAplhabet(char)) {
          let temp =  this._mod26((char.charCodeAt(0) - 65) + (key[(i - nonAlphabet) % key.length].charCodeAt(0) - 65)) + 65;
          char = String.fromCharCode(temp);
        } else {
          nonAlphabet++;
        }
        result.push(char);
      }
    
      return result.join('');
    },
  
    decrypt(cipher, key) {
      str = str.toUpperCase();
      key = key.toUpperCase();
      
      let result = [];
      let nonAlphabet = 0;
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (this._checkAplhabet(char)) {
          let temp =  this._mod26((char.charCodeAt(0) - 65) - (key[(i - nonAlphabet) % key.length].charCodeAt(0) - 65)) + 65;
          char = String.fromCharCode(temp);
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
  
  export default Vigenere;