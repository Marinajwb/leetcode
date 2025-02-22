/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const tempMap = new Map();

    for ([i,num] of nums.entries()){
        const comple = target - num
        if(tempMap.has(comple))
        return [tempMap.get(comple),i]
        tempMap.set(num,i) 

    }
       
 return []

    

};