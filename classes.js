// ***** Queue question *****

class Queue {
  #list = [];

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.shift() ?? null;
  }

  hasNext() {
    console.log(this.#list);
    return !!this.#list.length;
  }
}

const queue = new Queue();

console.log(queue.hasNext());
console.log(queue.enqueue('something'));
console.log(queue.enqueue('something else'));
console.log(queue.hasNext());
console.log(queue.dequeue());
console.log(queue.hasNext());
console.log(queue.dequeue());
console.log(queue.hasNext());
console.log(queue.dequeue());

// ***** O(1) Dequeue question *****

class Dequeue {
  #newList = [1, 2];
  #first = 0;

  enqueue(item) {
    this.#newList.push(item);
  }

  dequeue() {
    if (this.#first === this.#newList.length) null;
    if (this.#first < this.#newList.length) this.#first = this.#first + 1;
    return this.#newList[this.#first - 1];
  }

  hasNext() {
    console.log(this.#newList);
    console.log(this.#newList.length, this.#first);
    return this.#newList.length === this.#first;
  }
}

const dequeue = new Dequeue();

console.log(dequeue.hasNext());
console.log(dequeue.enqueue('something'));
console.log(dequeue.enqueue('something else'));
console.log(dequeue.hasNext());
console.log(dequeue.dequeue());
console.log(dequeue.hasNext());
console.log(dequeue.dequeue());
console.log(dequeue.hasNext());
console.log(dequeue.dequeue());

class Stack {
  #list = [];

  push(item) {
    //implement me
    this.#list.push(item);
  }

  pop() {
    //implement me
    const list = this.#list;
    return list.length ? list.pop() : null;
  }

  peek(list) {
    //implement me
    const newList = this.#list;
    return newList.length ? newList.at(-1) : null;
  }

  get size() {
    //implement me
    return this.#list.length;
  }
}

// ***** Matching brackets *****

function isFormatted(syntaxStr) {
  const stack = new Stack();

  const syntaxArr = syntaxStr.split('');
  let tOrF = true;

  for (let i = 0; i < syntaxArr.length; i++) {
    if (syntaxStr[i] === '(' || syntaxStr[i] === '{') {
      stack.push(syntaxArr[i]);
    }

    function checkMatch(curChar, closeBracket, wrongOpen) {
      if (curChar === closeBracket) {
        stack.peek() === wrongOpen || !stack.size
          ? (tOrF = false)
          : stack.pop();
      }
    }

    checkMatch(syntaxStr[i], ')', '{');
    checkMatch(syntaxStr[i], '}', '(');
  }

  return tOrF;
}
console.log(
  isFormatted('if(true) { return; }'), //true
  isFormatted("( true && ( name: 'foo' } )"), //false
  isFormatted('((2 + 3) * (4 + 11 * 2 - 1)))'), //false
  isFormatted('((2 + 3) * (4 + 11 * (2 - 1)))') //true
);
