

 var isValid = function(s) {
   
     let stack =[];
    for(let i=0; i<s.length; i++){
        let char = s[i];
        switch(char){
            case "(":case "{":case "[": {
                stack.push(char);
                break;
            }
            default:
                if (char !== stack.pop()) {
                    return false;
                } 
        }
        
        
    }
    return stack.length === 0; 
}; 

/* const isValid = (s) => {
    const map = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    const st = [];
    for (let c of s) {
      if (map[c]) {
        st.push(map[c]);
      } else {
        if (c !== st.pop()) return false;
      }
    }
    return st.length === 0;
  }; */

console.log (isValid("()"));