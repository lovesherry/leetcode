//1
var reverseVowels = function(s) {
    var vowels = 'aeiouAEIOU',val;
    var arr = s.split(''),
        left = 0,
        right = arr.length-1;
    while(left<right){
        while(vowels.indexOf(arr[left])===-1&&left<right){
            left++;
        }
        while(vowels.indexOf(arr[right])===-1&&left<right){
            right--;
        }
        if(left<right){
            val = arr[left];
            arr[left]  = arr[right];
            arr[right] = val;
            left++;
            right--;
        }
    }
    return arr.join('')
};
//2
var reverseVowels = function(s) {
    var vowels = 'aeiouAEIOU',val,res=[];
    var arr = s.split(''),count;
    for(var i = 0;i < arr.length;i++){
        if(vowels.indexOf(arr[i])>-1){
            res.push(i)
        }
    }
    count = Math.floor(res.length/2)
    for(var i = 0;i < count;i++){
        val = arr[res[i]];
        arr[res[i]] = arr[res[res.length-1-i]];
        arr[res[res.length-1-i]] = val;
    }
    return arr.join('')
};