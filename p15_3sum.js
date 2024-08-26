let arr = [-1,0,1,2,-1,-4]

const threeSum = (arr) =>{

    let res = []

    arr.sort((a,b) => a-b) // [ -4, -1, -1, 0, 1, 2 ]

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i]

        if(i > 0 && first == arr[i - 1]) continue

        let low =  i + 1
        let high = arr.length - 1


       while (low < high) {
        let sum = arr[low] + arr[high] + first
        if (sum === 0) {
            res.push([first, arr[low], arr[high]])
            low++
            while (arr[low] === arr[low - 1] && low < high) {
                l++;
            }
        }else if(sum < 0){
            low++
        }
        else{
            high--
        }
       }
    }
    return res
}

let result = threeSum(arr)

console.log(result)
