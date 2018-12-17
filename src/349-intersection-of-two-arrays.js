var intersection = function(nums1, nums2) {
    var map = {},res=[];
    for(let i = 0;i<nums1.length;i++){
        map[nums1[i]] = 1;
    }
    for(let i = 0;i<nums2.length;i++){
        if(map[nums2[i]]===1){
            res.push(nums2[i])
            map[nums2[i]] = 0;
        }
    }
    return res;
};