function map(array, funct) {
    const newArray = []
    for (let i = 0; array.length > i; i++) {
        newArray.push(funct(array[i]));
    }
    return newArray
}

function reduce(array, funct, start) {
    let i;
    if (!start) {
        start = array[0]
        i = 1;
    } else {
        i = 0;
    }
    let value = start;
    for (; i < array.length; i++) {
        value = funct(array[i], value)
    }
    return value
}