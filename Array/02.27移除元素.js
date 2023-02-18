/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l1 = 0
    for(let l2 = 0; l2<=nums.length-1;l2++){
        if(nums[l2]!==val){
            nums[l1] = nums[l2]
            l1++
        }
    }
    return l1
};

// 双指针快慢指针