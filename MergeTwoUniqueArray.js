let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let mergeArray = (array1, array2) => {
    
    let mergedArray = []
    
    let check = (arr, element) => {
        for(let i =0; i < arr.length; i++){
            if(arr[i] === element){
                return true
            }
            
        }
            return false
    }
    
    for(let i = 0; i < array1.length; i++){
        if(!check(mergedArray, array1[i])){
            mergedArray.push(array1[i])
        }
    }
    
    for(let i = 0; i < array2.length; i++){
        if(!check(mergedArray, array2[i])){
            mergedArray.push(array2[i])
        }
    }
    
    return mergedArray
    
}

console.log(mergeArray(array1, array2))

