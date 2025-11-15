const removeFromArray = function(arr, ...items) {
    return arr.filter((item) => !(items.includes(item)));
};

/*

    for each element (map):
        if in items
*/

// Do not edit below this line
module.exports = removeFromArray;
