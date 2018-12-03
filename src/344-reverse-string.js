var reverseString = function(s) {
    let reversed = '';
  
    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s.charAt(i);
    }
  
    return reversed;
  };