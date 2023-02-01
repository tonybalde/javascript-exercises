const reverseString = function(str) {

let newStr = "";    

// hello
// 01234

for (let i=1; i <= str.length; i++){
    ultimaPalabra = str[str.length - i];
    newStr = newStr + ultimaPalabra;
}
return newStr;

};

// Do not edit below this line
module.exports = reverseString;
