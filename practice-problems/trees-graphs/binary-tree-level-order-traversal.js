class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

const levelOrder = root => {
  const result = [];

  if (root === null) {
    return [];
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let nodeCount = queue.length;
    let rowResult = [];
    
    while(nodeCount > 0) {
      let currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      rowResult.push(currentNode.val);
      nodeCount --;
    }

    result.push(rowResult);
  }

  return result;
}