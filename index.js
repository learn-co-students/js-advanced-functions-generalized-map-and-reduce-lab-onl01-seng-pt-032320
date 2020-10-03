

function map(sourceArray, fn){
    let newArray = [] 
    for ( let i = 0; i < sourceArray.length; i++ ) {
        let newElement = fn(sourceArray[i])
        newArray.push(newElement)
    }
    return newArray
}



function reduce(arr, fn, memo) {
    //if memo is truthy, use memo as currentValue, otherwise set first index in array to currentValue 
    let currentValue = memo ? memo : arr[0]; 
    // if memo is truthy, i = 0, otherwise i = 1.  So if memo is given, currentValue = memo and we 
    //are starting with the first index 
    let i = memo ? 0 : 1;
    
    for (; i < arr.length; i++) {
      currentValue = fn(arr[i], currentValue);
        //this is where the callback function handles summing to total or checking for true or false values
        //depending on the callback function 
        //ex)  // anyFalse = function(a, memo){ return !!a && memo})
        // truePreset = function(a, memo){ return a || !!memo })
        // alltrue = function(a, memo){ return !!a && !!memo})
        //reducetoTotal = function(a, memo){ return a + memo})
        //currentValue will either equal true or false depending on the function passed in
    }
  
    return currentValue; // this will either be true or false or the sum of the array plus memo
  }

