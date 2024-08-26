let nums = [10,20,30,5,10,50]

var maxAscendingSum = function(nums) {
     let max = nums[0]
     let current = nums[0]

     for (let i = 0; i < nums.length; i++) {

    if(nums[i] > nums[i-1]){
        current += nums[i]
    }
    else{
        max = Math.max(max, current)
        current = nums[i]
    }
}
     
    return Math.max(max, current)
    
};


let result = maxAscendingSum(nums)
console.log(result);
