let arr = [1,9,5,2]

let target = 10


const hashMap = (arr, target) => {
    let haspMap = {}

    
    for(let i = 0; i < arr.length; i++){
        let number = target - arr[i]
        
        if(haspMap.hasOwnProperty(number)){
            return [haspMap[number], i]
        }
        
        haspMap[arr[i]] = i
        
        console.log(haspMap);
        
    }
    return []
    
}

let result = hashMap(arr, target)

console.log(result);

