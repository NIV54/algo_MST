type Comparator<T> = (a: T, b: T) => boolean;

const defaultBiggerThen: Comparator<unknown> = <T>(a: T, b: T) => a > b;
const defaultSmallerThen: Comparator<unknown> = <T>(a: T, b: T) => a < b;

export class MinimumHeap<T> {
  heap = new Array<T>();

  biggerThen: Comparator<T>;
  smallerThen: Comparator<T>;

  constructor(
    biggerThen: Comparator<T> = defaultBiggerThen,
    smallerThen: Comparator<T> = defaultSmallerThen
  ) {
    this.biggerThen = biggerThen;
    this.smallerThen = smallerThen;
  }

  getMin = () => {
    return this.heap[0];
  };

  insert = (item: T) => {
    this.heap.push(item);
    if (this.heap.length >= 1) {
      let currentIndex = this.heap.length - 1;

      while (
        currentIndex >= 1 &&
        this.biggerThen(this.heap[Math.floor(currentIndex / 2)], this.heap[currentIndex])
      ) {
        this.swapIndex(Math.floor(currentIndex / 2), currentIndex);
        currentIndex = Math.floor(currentIndex / 2);
      }
    }
  };

  remove = () => {
    const returnValue = this.getMin();
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.splice(this.heap.length - 1, 1);

    let parent = 0;
    let leftChildIndex = 2 * parent + 1;
    let rightChildIndex = 2 * parent + 2;
    let left = leftChildIndex > this.heap.length ? null : this.heap[leftChildIndex];
    let right = rightChildIndex > this.heap.length ? null : this.heap[rightChildIndex];
    do {
      // no children
      if (!left && !right) {
        break;
      }

      // 1 child
      else if (!right && left && this.biggerThen(this.heap[parent], left)) {
        this.swapIndex(parent, leftChildIndex);
        parent = leftChildIndex;
      }

      // 2 children
      else if (left && right) {
        if (this.smallerThen(left, right) && this.biggerThen(this.heap[parent], left)) {
          this.swapIndex(parent, leftChildIndex);
          parent = leftChildIndex;
        } else if (this.biggerThen(left, right) && this.biggerThen(this.heap[parent], right)) {
          this.swapIndex(parent, rightChildIndex);
          parent = rightChildIndex;
        }
      }

      leftChildIndex = 2 * parent + 1;
      rightChildIndex = 2 * parent + 2;
      left = leftChildIndex > this.heap.length ? null : this.heap[leftChildIndex];
      right = rightChildIndex > this.heap.length ? null : this.heap[rightChildIndex];
    } while (
      left &&
      right &&
      (this.biggerThen(this.heap[parent], left) || this.biggerThen(this.heap[parent], right))
    );

    return returnValue;
  };

  size = () => this.heap.length;

  exists = (item: T) => !!this.heap.find(heapItem => heapItem === item);

  private swapIndex = (a, b) => {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  };
}
