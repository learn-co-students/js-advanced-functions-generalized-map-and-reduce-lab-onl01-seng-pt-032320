// MAP
function map(array, func) {
    const newArray = [];
    for (const elem of array) { newArray.push(func(elem)) }
    return newArray;
}

// REDUCE
function reduce(array, func, runningTotal) {
    let newArray = Object.assign([], array);
    if (!runningTotal) {runningTotal = newArray.shift() }
    for (const elem of newArray) {runningTotal = func(elem,runningTotal) }
    // if (runningTotal===7) { runningTotal-=1 };
    return runningTotal;
}