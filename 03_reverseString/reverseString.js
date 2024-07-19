const reverseString = function(a) {
    let w = ""

    for (let i = 0; i < a.length; i++) {
        w = a[i] + w;
    }
    return w

};

// Do not edit below this line
module.exports = reverseString;
