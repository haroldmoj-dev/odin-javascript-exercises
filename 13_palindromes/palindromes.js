const palindromes = function (str) {
    let allowed = "abcdefghijklmnopqrstuvwxyz0123456789";
    let strFiltered = str
        .toLowerCase()
        .split('')
        .filter(element => allowed.includes(element))
        .join('');
    let strReversed = strFiltered.split('').slice().reverse().join('');

    return strFiltered === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
