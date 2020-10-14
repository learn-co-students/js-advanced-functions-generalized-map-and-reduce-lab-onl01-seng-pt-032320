// Add your functions here
function map(src, like) {
    let a = []
    for (let b = 0; b < src.length; b++) {
        let whatEva = src[b]
        a.push(like(whatEva))
    }
    return a;
}

function reduce(src, like, start) {
    let a = (!!start) ? start : src[0]
    let b = (!!start) ? 0 : 1

    for (; b < src.length; b++) {
        a = like(src[b], a)
    }
    return a;
}