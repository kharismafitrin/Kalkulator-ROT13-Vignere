const ROT13 = {
    job(str) {
      const shift = 13;
      let result = [];
    
      for (let i = 0; i < str.length; i++) {
          let char = str[i];
          let temp = !this._checkAplhabet(char) ? char 
                    : char === char.toUpperCase() ? String.fromCharCode((char.charCodeAt(0) + shift - 65) % 26 + 65)
                    : String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97)
          
          result.push(temp);
      }
    
      return result.join('');
    },
  
    _checkAplhabet(char) {
      return (/[a-zA-Z]/).test(char);
    }
  }
  
  
  
  export default ROT13;