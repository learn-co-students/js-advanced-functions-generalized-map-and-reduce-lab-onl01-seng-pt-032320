// Add your functions here

let map = function(arr,callback){
    let r =[]
    for (let i = 0; i < arr.length; i++ ){
         r.push(callback(arr[i]))
    }
    return r 
}

let reduce = function(arr,callback,start = 1) {
    if (start === 1) {
        start = 0
    }
    for (let i = 0; i < arr.length; i++ ){
       start = (callback(arr[i],start))
   }
//    if (start) {
//        return true 
//    }
//    else {
//        return false 
//    }
    return start
}

