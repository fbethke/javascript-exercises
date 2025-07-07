const removeFromArray = function(array, ...item) {
    let newArray = array.filter(function(input) {
        return !item.includes(input);
    })
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
