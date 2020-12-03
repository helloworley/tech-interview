// Stack: 
// A data structure that only allows data to be added (pushed) or removed (popped) from the "top" of the stack

class Stack {
  constructor() {
    this._array = [];
  }

  add(v) {
    this._array.push(v);
  }

  remove() {
    return this._array.pop();
  }
}