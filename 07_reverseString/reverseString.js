const reverseString = function(string) {
    arr = string.split('');
    arr = arr.reverse();
    string = arr.join('');
    return string;
};

// Do not edit below this line
module.exports = reverseString;
