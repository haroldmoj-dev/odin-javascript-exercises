const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let copy = "";
    for (let i=0; i<num; i++) {
        copy += string;
    }
    return copy;
};

// Do not edit below this line
module.exports = repeatString;
