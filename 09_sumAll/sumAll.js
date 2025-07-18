const sumAll = function(number, number_2) {

    let result = 0;

    if (number < 0 
        || number_2 < 0 
        || Number.isNaN(number)
        || Number.isNaN(number_2)
        || !Number.isInteger(number)
        || !Number.isInteger(number_2)) {
        return 'ERROR';
    }

    if (number > number_2) {
        let number_tmp = number_2;
        number_2 = number;
        number = number_tmp;
    }

    for (let i = number; i <= number_2; i++) {

        result = result + i;
    }
    
    return (result);

};

// Do not edit below this line
module.exports = sumAll;
