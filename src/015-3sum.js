var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    var idx = nums.findIndex(v=>v>=0);
    var res=[]
    for(let i = 0;i<=idx;i++) {
        let a = nums[i];
        if(i>0 && nums[i-1]===a) {
            continue;
        }
        var left = i+1;
        var right = nums.length - 1;
        while(left < right) {
            if(a + nums[left] + nums[right] >0) {
                right--;
            }else if(a + nums[left] + nums[right] < 0) {
                left++;
            }else {
                res.push([a,nums[left],nums[right]])
                left++;
                right--;
                while(left < right && nums[left] === nums[left-1]) {
                    left++;
                }
                while(left < right && nums[right] === nums[right+1]) {
                    right--;
                }
            }
        }
    }
    return res;
    
};


//168ms  beats 98%

var threeSum = function(nums) {
    const res = []
    const n = nums.length
    
    if (n < 3) return res;
    nums.sort((a,b) => a- b)
      
    for (let k=0;k<n - 2;k++) {
        
        if(nums[k] > 0) return res
        
        if(k>0 && nums[k] === nums[k-1]) continue
        let i = k+1
        let j = n-1
        
        while(i<j) {
  
            if (nums[k]+nums[i]+nums[j] === 0) {
                res.push([nums[k], nums[i], nums[j]])
                i++
                j--
                
                while(i<j && nums[i] === nums[i-1]) {
                    i++
                }
                
                while(i<j && nums[j] === nums[j+1]) {
                    j--
                }
            } else if(nums[k]+nums[i] + nums[j] > 0) {
                j--
            } else {
                i++
            }
        }
    }
      
    return res
  };
  //168ms beats 98%;