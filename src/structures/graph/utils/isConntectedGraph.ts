import { GraphNode } from "../graph-node";

import { depthFirstSearchInner } from "./depthFirstSearch";

export const isConnectedTree = <T>(nodes: GraphNode<T>[]) => {
  const visited: Map<T, boolean> = new Map();
  let isFirstConnectionElement = true;
  nodes.forEach(node => {
    if (!visited.has(node.data)) {
      if (!isFirstConnectionElement) {
        return false;
      }
      isFirstConnectionElement = false;
      depthFirstSearchInner(node, visited, false);
    }
  });
  return true;
};
