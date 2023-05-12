import type { OrdComparator } from "../common.types";

import { defaultComparator } from "./common";
import { GraphNode } from "./graph-node";
import type { GraphNodes } from "./graph.types";

export class DirectedGraph<T> {
  nodes: GraphNodes<T> = new Map();
  comparator: OrdComparator<T>;

  constructor(comparator: OrdComparator<T> = defaultComparator) {
    this.comparator = comparator;
  }

  /**
   * adds node *if not exists*
   */
  addNode = (data: T): GraphNode<T> => {
    let node = this.nodes.get(data);

    if (node) return node;

    node = new GraphNode(data, this.comparator);
    this.nodes.set(data, node);

    return node;
  };

  removeNode = (data: T): GraphNode<T> | null => {
    const nodeToRemove = this.nodes.get(data);

    if (!nodeToRemove) return null;

    this.nodes.forEach(node => {
      node.removeAdjacent(nodeToRemove.data);
    });

    this.nodes.delete(data);

    return nodeToRemove;
  };

  addEdge = (source: T, destination: T, weight = 0): void => {
    const sourceNode = this.addNode(source);
    const destinationNode = this.addNode(destination);

    sourceNode.addAdjacent(destinationNode, weight);
  };

  removeEdge = (source: T, destination: T): void => {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destination);
    }
  };

  toString() {
    let result = ``;

    this.nodes.forEach(node => {
      result += node.toString() + "\n";
    });

    return result;
  }
}
