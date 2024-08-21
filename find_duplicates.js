let arr = [1,2,2,3,4,5,2,7,3,2,4]

const findDuplicate = (arr) => {
    const hashMap = {}
    let dup = []

    for (const element of arr) {
        
        hashMap[element] = (hashMap[element] || 0) + 1
    }

    for (const key in hashMap) {
        if (hashMap[key] > 1) {
            dup.push(Number(key))
            
        }
    }

    return dup
}

let result = findDuplicate(arr)

console.log(result);
