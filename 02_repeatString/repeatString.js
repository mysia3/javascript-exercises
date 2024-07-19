const repeatString = function(a,b) {
    let w = ""
    i = 0;
    if (b < 0) {
        return "ERROR"
    }
    while (i < b) {
        w = w + a
        i += 1
    }
    return w

};

// Do not edit below this line
module.exports = repeatString;
