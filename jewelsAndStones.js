// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

let jewels = "aA"
let stones = "aAAbbbb"

let jewelsAndStones = (jewels, stones) =>{

    let hash = {}

    let sInArray = Array.from(stones)
    let jInArray = Array.from(jewels)
    let count = 0

    for (let index = 0; index < sInArray.length; index++) {
        
        hash[sInArray[index]] = (hash[sInArray[index]] || 0 ) + 1
    }
    
    for (let index = 0; index < jInArray.length; index++) {
        console.log(jInArray[index]);
        if(hash.hasOwnProperty(jInArray[index])){
            
            count += hash[jInArray[index]]
        }
    }

    return count
    

}

let result = jewelsAndStones(jewels, stones)

console.log(result);
