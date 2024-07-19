const removeFromArray = function(arr, ...x) {
    for (const arg of x) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] == arg ) {
            if (typeof arr[i] == typeof arg) {
            arr.splice(i,1);
            i = i- 1;}
          }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
