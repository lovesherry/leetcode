var strStr = function(haystack, needle) {
    if(haystack.length&&!needle.length){
        return 0;
    }
    var flag = false;
    var len = haystack.length - needle.length + 1;
    for(let i = 0;i<len;i++){
        if(haystack.charAt(i)===needle.charAt(0)){
            flag = true;
            for(let k = 1;k<needle.length;k++){
                if(needle[k]!==haystack[i+k]){
                    flag = false;
                }
            }
            if(flag){
                return i
            }
        }
    }
    return -1;
};