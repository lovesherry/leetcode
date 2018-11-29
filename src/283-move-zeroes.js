var moveZeroes = function(nums) {
    var i = 0,j = 0;
    for(;j<nums.length;j++){
        if(nums[j]!==0){
            if(i!==j){
                nums[i] = nums[j]; 
            }       
            i++;            
        }
    }
    for(var k = nums.length-1;k>=i;k--){
        nums[k] = 0;
    }
    return nums;
};