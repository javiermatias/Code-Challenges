
//  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    
    //if(!root.left && !root.right) return true;
    //if(!root.left || !root.right) return false;
   debugger;
   function verify(nodeR, nodeL){
   if(!nodeR && !nodeL ){
       return true;
   }else if(!nodeR || !nodeL){
       return false;
   }else if(nodeR.val !== nodeL.val){
       return false;
  }else{
     return verify(nodeR.left, nodeL.left) && verify(nodeR.right, nodeL.right) ;      
  }
}
   
return verify(root.left, root.right);
   
};


let node1 = new TreeNode(3, new TreeNode(4), new TreeNode(5))
let node2 = new TreeNode(3, null,new TreeNode(4))
let node = new TreeNode(2, node1, node2)

isSymmetric(node);

