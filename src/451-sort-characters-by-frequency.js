var frequencySort = function(s) {
    var freq=Array(126-32+1);   //ASCⅡ码  32->空格 126->~  包含A-Za-z,和普通字符，。；‘/……
    var i;
    for(i=0;i<126-32+1;i++){
        freq[i]=[0,i];//桶排序
    }
    
    for(i=0;i<s.length;i++)
        freq[s.charCodeAt(i)-32][0]++;
    
    freq.sort((a,b)=>b[0]-a[0]);
    var res='';
    for(i=0;i<126-32+1 && freq[i][0];i++)
        res+=String.fromCharCode(freq[i][1]+32).repeat(freq[i][0]);
    
    return res;
        
    
};
//60ms beats 100%

var frequencySort = function(s) {
    var map = {},res='';
    for(let i = 0;i<s.length;i++) {
        map[s.charAt(i)] = map[s.charAt(i)] + 1 || 1;
    }
    Object.keys(map).sort((a,b)=>{
        return map[b] - map[a]
    }).forEach(v=>{
        // for(let i = 0;i<map[v];i++) {
        //     res += v
        // }
        res += v.repeat(map[v])   //string的repeat方法  比for循环降低了20ms
    })
    return res;
};
//64ms beats 99.39%；