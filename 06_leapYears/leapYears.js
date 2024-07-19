const leapYears = function(a) {
    if (a % 4 == 0) {
        if (a % 400 == 0) {
            return true
        }
        if (a % 100 == 0) {
            return false
        }
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
