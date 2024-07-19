const sumAll = function(a,b) {
    if (typeof(a) != typeof(1)) {
        return "ERROR"
    } else if (typeof(a) != typeof(b)) {
        return "ERROR"
    } else if ( a < 0 || b < 0) {
        return "ERROR"
    } else if (Number.isInteger(a) == false || Number.isInteger(b == false )) {
        return `ERROR`
    }



    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    let s = 0;
    
    while (a <= b) {
      console.log(a)
      s = a + s;
      a++;
    }



    return s;
};


// Do not edit below this line
module.exports = sumAll;
