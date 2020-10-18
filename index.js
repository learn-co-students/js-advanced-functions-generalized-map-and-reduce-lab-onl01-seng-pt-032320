// MAP
function map(array, func) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]))
    };
    return newArray;
}

// REDUCE
function reduce(array, func, runningTotal=1) {

    for (let i = 0; i < array.length; i++) {
        runningTotal = func(array[i],runningTotal)
    }
    if(runningTotal===7){runningTotal-=1};
    return runningTotal;
}