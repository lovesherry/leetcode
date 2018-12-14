var isHappy = function(n) {
    var num =  n.toString().split("").reduce(reducer, 0);
    if(num > 4) {
        return isHappy(num);
    }else if(num === 1) {
        return true;
    }else {
        return false;
    }
};

function reducer(counts, currentVal ) { 
    return counts + Math.pow(currentVal,2);;
};
//60ms beats 98%;