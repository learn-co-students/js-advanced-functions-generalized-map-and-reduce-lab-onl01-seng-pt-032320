// Add your functions here

let map = function(arr,callback){
    let r =[]
    for (let i = 0; i < arr.length; i++ ){
         r.push(callback(arr[i]))
    }
    return r 
}

let reduce = function(arr,callback){
 let value;
    for (let i = 0; i < arr.length; i++ ){
        value = (callback(arr[i]))
   }
   return value
}

