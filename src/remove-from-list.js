const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList( l, k ) {
  while (l !== null && l.value === k) {
    l = l.next;
  }

  // If the list is empty after removing head nodes
  if (l === null) {
    return null;
  }

  // Use a pointer to traverse the list
  let current = l;
  while (current.next !== null) {
    if (current.next.value === k) {
      // Skip the node with value k
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return l;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
