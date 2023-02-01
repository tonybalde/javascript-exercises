const palindromes = function (str) {

  let stripPunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-_'~()]/g,"");
  //console. log(stripPunc);
  let finalStripPunc = stripPunc.replace(/ /g,""); // strips multi-
  //console. ,log(finalStripPunc);
  let finalStrippedStr = finalStripPunc.toLowerCase(); // removes a
  //console. log(finalStrippedStr);
  let splitString = finalStrippedStr.split("");
  //console. log g(splitString);
  let reverseArray = splitString.reverse();
  //console. log(reverseArray);
  let finalReversedStr = reverseArray.join("");
  //console. Log(finalReversedStr);
  if (finalStrippedStr === finalReversedStr) {
       return true;
  } else return false;
  


};

// Do not edit below this line
module.exports = palindromes;


