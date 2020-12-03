/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */


 const levelOrderBottom = (root) => {
   let result = [];

   if (root === null) {
     return;
   }

   let queue = [];
   queue.push(root);

   while(queue.length !== 0) {
     let nodeCount = queue.length;
     let rowResult = [];

     // the goal of this is to push the current node's children to the rowResult
     while(nodeCount > 0) {
       let currentNode = queue.shift();
       
       if (currentNode.left !== null) {
         queue.push(currentNode.left);
       }

       if (currentNode.right !== null) {
         queue.push(currentNode.right);
       }

       rowResult.push(currentNode.val);
       nodeCount--;
     }
     result.unshift(rowResult);
   }

   return result;
 }

