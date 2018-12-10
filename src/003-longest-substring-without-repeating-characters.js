var lengthOfLongestSubstring = function(s) {
    let right = 0,
        maxL = 0,
        res = [];
    while(right<s.length){
        if(res.indexOf(s.charAt(right))===-1){
            res.push(s.charAt(right));
            right++;
        }else{
            maxL = Math.max(maxL,res.length);
            res.shift()
        }
    }
    maxL = Math.max(maxL,res.length);
    return maxL;

};