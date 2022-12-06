const ROT13 = {
  encrypt(str){
    let result = [];
    str = str.toUpperCase();
    const shift = 13;
    
    for(let i = 0; i < str.length; i++){
      let char = str[i];
      if(this._checkAplhabet(char)){
        char = String.fromCharCode(this._mod26(char.charCodeAt(0) - 65 + shift) + 65)
      }
      result.push(char);
    }

    return result.join('');
  },

  decrypt(str){
    let result = [];
    str = str.toUpperCase();
    const shift = 13;
    
    for(let i = 0; i < str.length; i++){
      let char = str[i];
      if(this._checkAplhabet(char)){
        char = String.fromCharCode(this._mod26(char.charCodeAt(0) - 65 - shift) + 65)
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
  
  
  
  export default ROT13;