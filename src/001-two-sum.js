var twoSum = function(nums, target) {
    const temp = {}
    for(let i = 0;i<nums.length;i++){
        const test = temp[nums[i]];
        if(test!==undefined){
            return [test,i]
        }
        temp[target - nums[i]] = i;
    }
};