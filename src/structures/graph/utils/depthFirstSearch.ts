import { GraphNode } from "../graph-node";

import type { GraphNodes } from "../types";

const depthFirstSearchInner = <T>(node: GraphNode<T>, visited: Map<T, boolean>): void => {
  if (!node) return;

  visited.set(node.data, true);

  console.log(node.data);

  node.adjacent.forEach(item => {
    if (!visited.has(item.node.data)) {
      depthFirstSearchInner(item.node, visited);
    }
  });
};

export const depthFirstSearch = <T>(nodes: GraphNodes<T>) => {
  const visited: Map<T, boolean> = new Map();
  nodes.forEach(node => {
    if (!visited.has(node.data)) {
      depthFirstSearchInner(node, visited);
    }
  });
};
