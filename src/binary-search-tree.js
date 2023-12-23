const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    function addTreeNode(treeNode, value) {
      if (!treeNode) {
        return new Node(value);
      }

      if (treeNode.data == value) {
        return treeNode;
      }

      if (value < treeNode.data) {
        treeNode.left = addTreeNode(treeNode.left, value);
      } else {
        treeNode.right = addTreeNode(treeNode.right, value);
      }
      return treeNode;
    }

    this.start = addTreeNode(this.start, data);
  }

  has(data) {
    const foundTreeNode = this.find(data);
    return foundTreeNode ? true : false;
  }

  find(data) {
    function searchDataInTree(treeNode, value) {
      if (!treeNode) {
        return null;
      }

      if (treeNode.data == value) {
        return treeNode;
      }

      if (value < treeNode.data) {
        return searchDataInTree(treeNode.left, value);
      } else {
        return searchDataInTree(treeNode.right, value);
      }
    }

    return searchDataInTree(this.start, data);
  }

  remove(data) {
    function removeTreeNode(treeNode, value) {
      if (!treeNode) {
        return null;
      }

      if (value < treeNode.data) {
        treeNode.left = removeTreeNode(treeNode.left, value);
        return treeNode;
      } else if (treeNode.data < value) {
        treeNode.right = removeTreeNode(treeNode.right, value);
        return treeNode;
      } else {
        if (!treeNode.left && !treeNode.right) {
          return null;
        }
        if (!treeNode.right) {
          treeNode = treeNode.left;
          return treeNode;
        }
        if (!treeNode.left) {
          treeNode = treeNode.right;
          return treeNode;
        }

        //treeNode.left && treeNode.right exist
        let minFromRight = treeNode.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        treeNode.data = minFromRight.data;

        treeNode.right = removeTreeNode(treeNode.right, minFromRight.data);

        return treeNode;

      }
    }

    removeTreeNode(this.start, data);
    return null;
  }

  min() {
    if (!this.start) {
      return null;
    }

    let treeNode = this.start;
    while (treeNode.left) {
      treeNode = treeNode.left;
    }

    return treeNode.data;
  }

  max() {
    if (!this.start) {
      return null;
    }

    let treeNode = this.start;
    while (treeNode.right) {
      treeNode = treeNode.right;
    }

    return treeNode.data;
  }
}

module.exports = {
  BinarySearchTree
};