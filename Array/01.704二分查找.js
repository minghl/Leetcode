/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0,
    right = nums.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(nums[middle]>target){
            right = middle-1
        }else if(nums[middle]<target){
           left = middle+1
        }else{
            return middle
        }
    }
    return -1
};