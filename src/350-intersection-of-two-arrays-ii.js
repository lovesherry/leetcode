var intersect = function(nums1, nums2) {
    if(!nums1.length || !nums2.length) {
        return []
    }
    if(nums2.length < nums1.length) {
        [nums2,nums1] = [nums1,nums2];
    }
    var map = {}, res = [];
    for(let k in nums1) {
       map[nums1[k]] = map[nums1[k]] + 1 || 1; 
    }
    nums2.some((v)=>{        
        if(map[v]>0){
            res.push(v);
            map[v] -= 1;
            return
        }        
    })
    return res;
};
//52ms beats 100%