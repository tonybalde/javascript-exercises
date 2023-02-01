const repeatString = function(str, num) {

    var newStr = "";

if (num < 0){
    return "ERROR";
}

for (let i=0; i < num; i++){
        newStr = newStr + str;
    }
    return newStr;
}; 

// Do not edit below this line
module.exports = repeatString;
