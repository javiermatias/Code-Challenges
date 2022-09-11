/* Given an integer array nums, find the contiguous subarray
 (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
   
    //let indiceMayor=0;
    //let indiceMenor=0;
    let sum=0;
    for(let i=0; i<nums.length; i++){
         let sumAux=0;
        for(let j=i; j<nums.length;j++){
             sumAux += nums[j]
            
            if(sumAux > sum){
                sum=sumAux;
                //indiceMenor=i;
                //indiceMayor=j;
            }
        }
    }

    return sum;
    
};


let maxSubArray1 = function(nums){
    let sum=nums[0];
    let sumMax=nums[0];
    for(let i=1; i<nums.length;i++){
        sum += nums[i];
        if(sum < nums[i]){
            sum=nums[i];
        }

        if(sum > sumMax){
            sumMax=sum;
        }
    }
    

    return sumMax;
}


let nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray1(nums));