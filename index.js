// Add your functions here

let map = function(arr,callback){
    let r =[]
    for (let i = 0; i < arr.length; i++ ){
         r.push(callback(arr[i]))
    }
    return r 
}

let reduce = function(arr,callback){
    let s = 0
    for (let i = 0; i < arr.length; i++ ){
        s = s + (callback(arr[i],0))
   }
   return s 
}

