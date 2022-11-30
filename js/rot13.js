const Vigenere = {
    encryption(plain, key) {
      let cipher = [];
      let nonAlphabet = 0;
    
      key = key.toUpperCase();
      for (let i = 0; i < plain.length; i++) {
        
        if (this._checkAplhabet(plain[i])) {
          const base = this._getBase(plain[i]);
          const plain25 = (plain[i].charCodeAt(0) - base);
          const key25 = (key[(i - nonAlphabet) % key.length].charCodeAt(0) - 65);
  
          const result =  this._mod26(plain25 + key25);
          cipher.push(String.fromCharCode(result + base));
        } else {
          cipher.push(plain[i]);
          nonAlphabet++;
        }
      }
    
      return cipher.join('');
    },
  
    decryption(cipher, key) {
      let plain = [];
      let nonAlphabet = 0;
    
      key = key.toUpperCase();
      for (let i = 0; i < cipher.length; i++) {
        
        if (this._checkAplhabet(cipher[i])) {
          const base = this._getBase(cipher[i]);
          const cipher25 = (cipher[i].charCodeAt(0) - base);
          const key25 = (key[(i - nonAlphabet) % key.length].charCodeAt(0) - 65);
  
          const result =  this._mod26(cipher25 - key25);
          plain.push(String.fromCharCode(result + base));
        } else {
          plain.push(cipher[i]);
          nonAlphabet++;
        }
      }
    
      return plain.join('');
    },
  
    _mod26(num) {
      while (num < 0) {
        num += 26;
      }
    
      return num % 26;
    },
    
    _checkAplhabet(char) {
      return (/[a-zA-Z]/).test(char);
    },
    
    _getBase(char) {
      if (/[a-z]/.test(char)) return 97;
    
      return 65;
    }
  }
  
  
  export default Vigenere;