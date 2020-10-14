// Add your functions here
function map(arr,fn){
    let newArr = []
    for (let x of arr){
        newArr.push(fn(x))
    }
    return newArr
}

function reduce(arr, fn, strt){
    let a = (!!strt) ? strt : arr[0]
    let b = (!!strt) ? 0 : 1
  
    for (; b < arr.length; b++) {
      a = fn(arr[b], a)
    }
  
    return a;
  }