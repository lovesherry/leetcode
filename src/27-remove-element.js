var removeElement = function (nums, val) {
    var i=0,j=0;
    for(;j<nums.length;j++){
        if(nums[j]!==val){
            if(i!==j){
                nums[i] = nums[j]; 
            }       
            i++;            
        }
    }
    for(var k=nums.length-1;k>=i;k--){
        nums[k] = val;
    }
    return nums.length-i;
};