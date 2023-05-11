import { defaultComparator } from "./common";

import type { Comparator, Edge } from "./types";

export class GraphNode<T> {
  data: T;
  adjacent: Edge<T>[];
  comparator: Comparator<T>;

  constructor(data: T, comparator: Comparator<T> = defaultComparator) {
    this.data = data;
    this.adjacent = [];
    this.comparator = comparator;
  }

  addAdjacent = (node: GraphNode<T>, weight: number = 0) => {
    this.adjacent.push({ node, weight });
  };

  removeAdjacent = (data: T): GraphNode<T> | null => {
    const index = this.adjacent.findIndex(adjacent => this.comparator(adjacent.node.data, data));

    if (index > -1) {
      return this.adjacent.splice(index, 1)[0].node;
    }

    return null;
  };

  toString = () => {
    const adjacentString = this.adjacent.map(adjacent => adjacent.node.data).join(", ");
    return `${this.data}: ${adjacentString}`;
  };
}
