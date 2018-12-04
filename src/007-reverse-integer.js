var reverse = function(x) {
    let res = 0;
    while(x){
        res=res*10+x%10;
        x=parseInt(x/10);
    }
    if(res > Math.pow(2,31) - 1 || res < Math.pow(-2,31)){
        return 0;
    }
    return res;
};