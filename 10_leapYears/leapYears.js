const leapYears = function(year) {

    checkYear = year / 4;
    checkYear2 = year / 100;
    checkYear3 = year / 400;
    if (Number.isInteger(checkYear) 
        && (!Number.isInteger(checkYear2) 
        || Number.isInteger(checkYear3))) {
    return true; }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
