// MAP
function map(array, func) {
    const newArray = [];
    for (const elem of array) { newArray.push(func(elem)) }
    return newArray;
}

// REDUCE
function reduce(array, func, runningTotal=1) {
    for (const elem of array) {runningTotal = func(elem,runningTotal) }
    if (runningTotal===7) { runningTotal-=1 };
    return runningTotal;
}