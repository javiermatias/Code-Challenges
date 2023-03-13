/*

LeetCode

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balancedbinary search tree. 

*/


 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {


     console.time("start");
      let root = new TreeNode(nums[0]);
      let nodeAux=root;
      for(let i=1; i < nums.length; i++){
        let node = new TreeNode(nums[i]);
        if(nodeAux.val > nums[i]){
            nodeAux.left = node;
            nodeAux = nodeAux.left;
        }else{
            nodeAux.right = node;
            nodeAux = nodeAux.right;
        }
        //recursive(root, nums[i]);

      }

      console.timeEnd("start");

    
};


function giveMeTree(nums){

    
    let root = new TreeNode(nums[0]);
    let nodeAux = root;
    for(let i=1; i < nums.length; i++){
      let node = new TreeNode(nums[i]);
      if(nodeAux.val > nums[i]){
          nodeAux.left = node;
          nodeAux = nodeAux.left;
      }else{
          nodeAux.right = node;
          nodeAux = nodeAux.right;
      }
      

    }

    return root;

    
    
}

function recursive(node, val){
    
           
 
          if(node.val > val){
             
            if(node.left){
                 recursive(node.left,val);
            }else{
                 node.left = new TreeNode(val);
            }
          }else{

            if(node.right){
                recursive(node.right,val);
            }else{
                node.right = new TreeNode(val);
            }

          }
    
}



sortedArrayToBST([2,3,6,8,10,12,6,23,5,7])