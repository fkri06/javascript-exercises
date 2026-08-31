const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repeatStr = "";
    for (let i = 0; i < num; i++) {
        repeatStr += string;
    }
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
