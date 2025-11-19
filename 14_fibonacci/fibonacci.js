// // my answer knowing recursive functions
// const fibonacci = function(input) {
//     input = Number(input);
//     if (input < 0) return "OOPS";
//     if (input === 0) return 0;
//     if (input === 1 || input === 2) return 1;
//     return fibonacci(input-2) + fibonacci(input-1);
// };

const fibonacci = function(input) {
    input = Number(input);
    if (input < 0) return "OOPS";
    if (input === 0) return 0;
    if (input === 1 || input === 2) return 1;

    let minusTwo = 1;
    let minusOne = 1;
    let answer = 0;

    for (let i = 3; i <= input; i++) {
        answer = minusTwo + minusOne;
        minusTwo = minusOne;
        minusOne = answer;
    }

    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
