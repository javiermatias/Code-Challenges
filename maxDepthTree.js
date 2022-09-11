
//  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(node) {
    debugger
    if (!node) {
        return 0;
      }
    
      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    
};

//[3,9,20,null,null,15,7]

let node = new TreeNode(3, new TreeNode(4), new TreeNode(9,new TreeNode(15),new TreeNode(7)));

maxDepth(node);