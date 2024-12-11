const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor(){
    this.rootNode=null;
  }
  root() {
    //throw new NotImplementedError("Not implemented");
   
    return this.rootNode;
    // remove line with error and write your code here
  }

  add( data ) {
    const newNode = { data, left: null, right: null };

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while (true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has( data ) {
    return !!this.find(data);
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find( data ) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove( data ) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      
      if (!node.left && !node.right) {
        return null; 
      }

      if (!node.left) {
        return node.right; // только правая сторона
      }

      if (!node.right) {
        return node.left; // Oтолько левая сторона
      }

      // Node with two children: Get the in-order successor (min value in the right subtree)
      let minRight = this._getMinNode(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  _getMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

   // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  
  min() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};