// Add your functions here

let map = function(arr,callback){
    let r =[]
    for (let i = 0; i < arr.length; i++ ){
         r.push(callback(arr[i]))
    }
    return r 
}

let reduce = function(arr,callback,start) {
    let value;
    if (start) {
        value = start 
        for (let i = 0; i < arr.length; i++ ){
            value = (callback(arr[i],value))
        }
    }

    else {
        value = arr[0]
        for (let i = 1; i < arr.length; i++ ){
            value = (callback(arr[i],value))
        }
    }
return value
}



