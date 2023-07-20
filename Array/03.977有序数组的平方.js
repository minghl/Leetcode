/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 排序算法题
// 看看排序算法+双指针

// 最low的一种
var sortedSquares = function(nums) {
    let arr = nums.map(item=>item*item)
    return arr.sort((a,b)=>(a-b))
};