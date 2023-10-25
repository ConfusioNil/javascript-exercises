const leapYears = function(leapYear) {
    let bool = false;

    if (leapYear % 400 == 0) {
        bool = true;
    }
    else if (leapYear % 100 == 0) {
        bool = false;
    }
    else if (leapYear % 4 == 0) {
        bool = true;
    }

    return bool;
}

// Do not edit below this line
module.exports = leapYears;
