var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    return check(s,t) && check(t,s)
};
var check = function(s,t) {
    var map = new Map(),sChar='',tChar='';
    for(let i = 0;i<s.length;i++) {
        sChar = s.charAt(i);
        tChar = t.charAt(i);
        if(map.has(sChar)) {
            if(map.get(sChar) !== tChar) {
                return false
            }
        }else {
            map.set(sChar,tChar);
        }
    }
    return true;  
}

//56ms beats 100%