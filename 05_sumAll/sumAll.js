const sumAll = function(startNum, finalSum) {
    if (!Number.isInteger(startNum) && !Number.isInteger(finalSum)) return 'ERROR';

    sum = 0;

    for (let i = startNum; i <= finalSum; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
