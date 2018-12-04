var romanToInt = function(s){
    var desc = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    var res = desc[s.charAt(s.length-1)],temp;
    for(var i = s.length-2;i>=0;i--){
        temp = desc[s.charAt(i)];
        if(temp >= desc[s.charAt(i+1)]){
            res += temp
        }else{
            res -= temp
        }
    }
    return res;
}