import type { Comparator } from "./types";

export class GraphNode<T> {
  data: T;
  adjacent: GraphNode<T>[];
  comparator: Comparator<T>;

  constructor(data: T, comparator: Comparator<T>) {
    this.data = data;
    this.adjacent = [];
    this.comparator = comparator;
  }

  addAdjacent = (node: GraphNode<T>) => {
    this.adjacent.push(node);
  };

  removeAdjacent = (data: T): GraphNode<T> | null => {
    const index = this.adjacent.findIndex(node => this.comparator(node.data, data));

    if (index > -1) {
      return this.adjacent.splice(index, 1)[0];
    }

    return null;
  };
}
