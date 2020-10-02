

let map = function(sourceArray, fn) {
    return sourceArray.map(fn)
}

let reduce = function(sourceArray, fn, startingPoint = 0) {
    return sourceArray.reduce(fn, startingPoint)
}




let sourceArray = [1,2,3,-9,""]


// function reduceToTotal(sourceArray, startingPoint = 0) {
//     sourceArray.forEach(element => startingPoint += element)
//     return startingPoint
//  }

// function reduceToAllTrue(sourceArray) {
//     let result = sourceArray.every( element  => Boolean(element) == true );
//     return result
// }


// function reduceToAnyTrue(sourceArray) {
//     let result = sourceArray.some( element  => Boolean(element) == true );
//     return result
// }