/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// @param {Node} head
// @return {Node}

const randomList = function(head) {

  let original = head, copy = new Node(head.val), copyHead = copy;
  let dict = new Map();
  dict.set(null, null);
  dict.set(original, copy);

  while(original.next) {
    copy.next = new Node(original.next.val);
    dict.set(original.next, copy.next);
    original = original.next;
    copy = copy.next;
  }

  original = head;
  copy = copyHead;
  while(original) {
    copy.random = dict.get(original.random);
    origial = original.next;
    copy = copy.next;
  }

  return copyHead;
}
