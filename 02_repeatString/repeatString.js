const repeatString = function(word , repitition) {
    if (repitition < 0) return "ERROR";
    let product = "";

    for (let i = 0; i < repitition; i++) {
        product += word;
    }

    return product;
}

// Do not edit below this line
module.exports = repeatString;
