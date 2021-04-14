/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {

    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentFirstNode = this.first;
      this.first = newNode;
      this.first.next = currentFirstNode;
    }

    this.size += 1;

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    if (!this.first) {
      throw new Error("Stack is empty!");
    } 

    let firstNode = this.first;

    // Check for edge case where there's only one node in the stack
    if (this.first === this.last) {
      this.last = null;
    }

    // Set the second node in the queue as the first node
    this.first = this.first.next 

    this.size -= 1;

    return firstNode.val;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
