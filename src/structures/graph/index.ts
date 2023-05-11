import { GraphNode } from "./graph-node";

import type { Comparator, GraphNodes } from "./types";

export class Graph<T> {
  nodes: GraphNodes<T> = new Map();
  comparator: Comparator<T>;

  constructor(comparator: Comparator<T>) {
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

  addEdge = (source: T, destination: T): void => {
    const sourceNode = this.addNode(source);
    const destinationNode = this.addNode(destination);

    sourceNode.addAdjacent(destinationNode);
  };

  removeEdge = (source: T, destination: T): void => {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destination);
    }
  };
}
