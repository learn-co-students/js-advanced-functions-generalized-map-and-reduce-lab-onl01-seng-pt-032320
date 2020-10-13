function map(array, callback) {
    return array.map(a => callback(a))
};

const reduce = (array, callback, x) => {
    let r = !!x ? x : array[0]
    
    for (let i = !!x ? 0 : 1; i < array.length; i++){
       r = callback(array[i], r)
    }
    return r
}