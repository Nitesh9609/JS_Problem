let nums = [1,1,1,2,2,3]
let k = 2

var topKFrequent = function(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    
    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    console.log(sorted);
    
    return sorted.slice(0, k).map(x => x[0]);
};

let result = topKFrequent(nums, k)

console.log(result);
