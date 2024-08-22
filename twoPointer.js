let arr = [1,2,3,8,10]

// const twoPointer = (arr, target) =>{
// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i]+arr[j] == target){
//             return [i,j]
            
//         }

//         else{
//             continue
//         }
//     }

// }
// }

// above code give the complexity o(n)^2

// now two pointer approach

const twoPointer = (arr, target) => {
let low = 0
let high = arr.length -1
while (low < high) {
    let sum = arr[low] + arr[high]
    if(sum == target){
        return [low, high]
    }else if(sum > target){
        high--
    }else{
        low++
    }
}
}

let result = twoPointer(arr, 5)
console.log(result);
