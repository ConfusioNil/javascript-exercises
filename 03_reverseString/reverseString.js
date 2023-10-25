const reverseString = function(reverses) {
    product = '';

    for (let i = reverses.length -1; i > -1; i--) {
        product += reverses[i];
    }

    return product;
}

// Do not edit below this line
module.exports = reverseString;
