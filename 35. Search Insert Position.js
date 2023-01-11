/* Given a sorted array of distinct integers and a target value,
 return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity. */

var searchInsert = function (nums, target) {

  // Establecer los límites de búsqueda

  if(target > nums[nums.length - 1]){
    return nums.length;
  }
  if(target < nums[0]){
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  

  // Seguir buscando mientras los límites no se crucen
  while (left <= right) {
    // Calcular el punto medio entre los límites
    let mid = Math.floor((left + right) / 2);
    // Si el punto medio es el elemento objetivo, devolver su índice
   if (nums[mid] < target) {
      left = mid + 1;
    }else if (nums[mid] > target) {
      right = mid - 1;
    }else if (nums[mid] === target) {
       return mid;
    }
    else {
       return mid; 
    }
  }
  // Si el elemento no se encuentra, devolver el índice donde se debería insertar
  return left;


};







searchInsert([2,3,5,6,8,34,37,42,56,90,104], 91);