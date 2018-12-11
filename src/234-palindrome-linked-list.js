var isPalindrome = function(head) {
    var arr=[],
        left=0,
        right;
    while(head!==null){
        arr.push(head.val);
        head = head.next;
    }
    right = arr.length - 1;
    while(left<=right){
        if(arr[left] !== arr[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
};