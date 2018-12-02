var maxArea = function(height) {
    var start = 0,
        end = height.length - 1,
        maxH = 0;
    while(start<=end){
        maxH = Math.max(maxH,Math.min(height[start],height[end])*(end - start));
        if(height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }
    return maxH
};