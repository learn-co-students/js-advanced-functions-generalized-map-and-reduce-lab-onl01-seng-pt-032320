// Add your functions here

const map = (array, callback) => {
    return array.map(x => callback(x))
    
}


const reduce = (array,callback,x) => {
    let r = !!x ? x : array[0]
    let i = !!x ? 0 : 1
    
    for (; i < array.length; i++){
       r = callback(array[i], r)
    }

    return r

}
