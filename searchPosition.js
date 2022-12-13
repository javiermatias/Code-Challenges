/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    debugger;
    let indexStart=0;
    let indexFinal=nums.length-1;
    if(nums[0]>=target){
        return 0;
    }

    if(target >= nums[indexFinal]){
        return indexFinal;
    }

    while(true){
        let position= indexStart + parseInt((indexFinal-indexStart)/2);
        if(nums[position-1]<target && nums[position] >= target){   
            return position;         
            
        }else if (nums[position]>target){
            indexFinal=position;
            
        }else{
            indexStart=position;
        }
    }
   
};


let arr= [1,3,4,5,6,9,11,15,22,34,45,50,55,67,90,100,120];
 

let val =54;

debugger;

var searchInsert1 = function(nums, target) {
    var right = nums.length - 1;
    var left = 0;
    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    
    return target > nums[left] ? left + 1 : left;

}
searchInsert1(arr, val);