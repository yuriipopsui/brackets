

module.exports = function check(str, bracketsConfig) {
  
  if(typeof str !== 'string'){
    return false;
  }
    let result = [];
    bracketsConfig.forEach(i => result.push(i.join('')));
    for (let i = 0; i < str.length; i++){
      result.forEach(i => 
        {while(str.includes(i)){
        str = str.replace(i, '');
        }
      });
    }
    result.forEach(i => {
      while (str.includes(i)) {
        str = str.replace(i, '');
      }
    });
    if (result.some(elem => str.includes(elem))) {
      i--;
    }

  return str ? false : true;
};



  


// '()', [['(', ')']]                      // -> true
// '((()))()', [['(', ')']]               // -> true
// '())(', [['(', ')']]                // -> false

// '([{}])', [['(', ')'], ['[', ']'], ['{', '}']]      // -> true

// '[(])', [['(', ')'], ['[', ']']]             // -> false
// '[]()', [['(', ')'], ['[', ']']]           // -> true
// '[]()(', [['(', ')'], ['[', ']']]          // -> false

// // special case: opening and closing bracket can be the same :)

// '||', [['|', '|']] // -> true
// '|()|', [['(', ')'], ['|', '|']]          // -> true
// '|(|)', [['(', ')'], ['|', '|']]          // -> false
// '|()|(||)||', [['(', ')'], ['|', '|']]     // -> true
