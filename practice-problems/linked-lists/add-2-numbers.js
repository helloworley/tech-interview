// You are given two non-empty lined lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a result.

// Example (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output 7 -> 0 -> 8
// Explanation 342 + 465 = 807

// @param {ListNode} l1
// @param {ListNode} l2


class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let p1 = l1;
  let p2 = l2;
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (p1 !== null || p2 !== null) {
    let x = (p1 !== null) ? p1.val : 0;
    let y = (p2 !== null) ? p2.val : 0;
    sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p1 !== null) {
      p1 = p1.mext;
    }

    if (p2 !== null) {
      p2 = p2.next;
    }
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  
  return dummyHead.next;
}

// these are arrays, but we would need to create actual list nodes
const l1 = [2,4,3];
const l2 = [5,6,4];
