import type { OrdComparator } from "../common.types";

import { leftIdx, parentIdx, rightIdx, swap } from "./utils";

export class MinHeap<T> {
  comparator: OrdComparator<T>;
  data: T[];

  constructor({ items, comparator }: { items?: T; comparator: OrdComparator<T> }) {
    this.comparator = comparator;
    this.data = items ? [items] : [];
  }

  isEmpty = (): boolean => {
    return this.data.length === 0;
  };

  peek = (): T | undefined => {
    return this.data[0];
  };

  pop = (): T | undefined => {
    if (this.data.length <= 1) {
      return this.data.pop();
    }

    const returnValue = this.data[0];
    const top = this.data.pop();
    if (!top) throw new Error("Something is wrong with pop implementation");
    this.data[0] = top;
    this.siftDown();

    return returnValue;
  };

  push = (item: T) => {
    this.data.push(item);
    this.siftUp();
  };

  heapify = () => {
    for (let idx = parentIdx(this.data.length - 1); idx >= 0; --idx) {
      this.siftDown(idx);
    }
  };

  exists = (item: T) => {
    return !!this.data.find(heapItem => heapItem === item);
  };

  private siftDown = (idx = 0) => {
    while (true) {
      const leftIndex = leftIdx(idx);
      if (leftIndex >= this.data.length) {
        break;
      }

      const rightIndex = rightIdx(idx);
      const childIdx =
        rightIndex < this.data.length
          ? this.comparator(this.data[leftIndex], this.data[rightIndex]) === "LT"
            ? leftIndex
            : rightIndex
          : leftIndex;

      if (this.comparator(this.data[childIdx], this.data[idx]) !== "LT") {
        break;
      }

      swap(childIdx, idx, this.data);
      idx = childIdx;
    }
  };

  private siftUp = () => {
    let idx = this.data.length - 1;
    while (idx > 0) {
      const parentIndex = parentIdx(idx);

      if (this.comparator(this.data[idx], this.data[parentIndex]) !== "LT") {
        break;
      }

      swap(idx, parentIndex, this.data);
      idx = parentIndex;
    }
  };
}
