var isAnagram = function(s, t) {
    const arr = [];
    arr.length = 27;
    arr.fill(0)
    
    if(s.length !== t.length) {
        return false
    }
    var num = 0;
    for(let i = 0;i<s.length;i++){
        num = s.charCodeAt(i) - 97;
        arr[num]++;
    }
    for(let i = 0;i<s.length;i++){
        num = t.charCodeAt(i) - 97;
        arr[num]--;
        if(arr[num]<0){
            return false
        }
    }
    return arr.every(v=>v===0)
};
//56ms beats 100%