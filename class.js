class Queue {
  #list = [];

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    this.#list.pop();
  }

  hasNext() {
    console.log(this.#list);
    return !!this.#list.length;
  }
}

const queue = new Queue();

console.log(queue.hasNext());
console.log(queue.enqueue('something'));
console.log(queue.hasNext());
console.log(queue.dequeue());
console.log(queue.hasNext());
