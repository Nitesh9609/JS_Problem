let arr1 = [1,2,3]

let arr2 = [4,5,6]

const itemInCommon = (arr1, arr2) =>{

    let hash = {}

    for (const element of arr1) {
        hash[element] =true
    }

   for (let index = 0; index < arr2.length; index++) {
   if(hash[arr2[index]]){
    return true
   }
}
    
return false
}

let result = itemInCommon(arr1, arr2)

console.log(result);
