var minSubArrayLen = function(s, nums) {
    let minSoFar =  Infinity;
    let sum = 0;
    let left = 0;
    let i = 0;
    while (i < nums.length) {
        sum += nums[i++];    
        while (sum >= s) {
            minSoFar = Math.min(minSoFar, i-left);
            sum -= nums[left++];
        }
    }
    return minSoFar === Infinity ? 0 : minSoFar;
};