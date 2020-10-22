// Add your functions here

function map( array, callback) {
    let r = []

    for (let i = 0; i < array.length; i++) {
        let theElement = array[i]
        r.push(callback(theElement))
    }
    return r;
}

function reduce(array, callback, startingValue) {
    let r = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1

    for (; i < array.length; i++) {
        r = callback(array[i], r)
    }
    return r;
} 