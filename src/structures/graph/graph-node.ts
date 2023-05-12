import type { OrdComparator } from "../common.types";

import { defaultComparator } from "./common";
import type { Edge } from "./graph.types";

export class GraphNode<T> {
  data: T;
  adjacent: Edge<T>[];
  private comparator: OrdComparator<T>;

  [prop: string]: any;

  constructor(data: T, comparator: OrdComparator<T> = defaultComparator) {
    this.data = data;
    this.adjacent = [];
    this.comparator = comparator;
  }

  addAdjacent = (node: GraphNode<T>, weight = 0) => {
    this.adjacent.push({ node, weight });
  };

  removeAdjacent = (data: T): GraphNode<T> | null => {
    const index = this.adjacent.findIndex(
      adjacent => this.comparator(adjacent.node.data, data) === "EQ"
    );

    if (index > -1) {
      return this.adjacent.splice(index, 1)[0].node;
    }

    return null;
  };

  upsertProp = (key: string, value: unknown) => {
    this[key] = value;
  };

  toString = () => {
    const adjacentString = this.adjacent.map(adjacent => adjacent.node.data).join(", ");
    return `${this.data}: ${adjacentString}`;
  };
}
