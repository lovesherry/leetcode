var wordPattern = function(pattern, str) {
    var words = str.split(' ');
    var patterns = pattern.split('');
    var map = {}
    if(words.length!==patterns.length) {
        return false;
    }
    for(let i = 0;i < words.length; i++) {
        if(map[patterns[i]]){
            if(map[patterns[i]] !== words[i]) {
                return false;
            }
        }else{
            if(Object.values(map).indexOf(words[i])>-1){
                return false
            }else{
                map[patterns[i]] = words[i]
            }
            
        }
    }
    return true;
};

//48ms beats 100%