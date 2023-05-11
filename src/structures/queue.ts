export class Queue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  enqueue = (item: T) => {
    this.queue.push(item);
  };

  dequeue = () => {
    return this.queue.shift();
  };

  size = () => {
    return this.queue.length;
  };

  isEmpty = () => {
    return this.size() === 0;
  };
}
