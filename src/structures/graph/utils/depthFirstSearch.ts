import { GraphNode } from "../graph-node";
import type { GraphNodeMap } from "../graph.types";

export const depthFirstSearchInner = <T>(
  node: GraphNode<T>,
  visited: Map<T, boolean>,
  shouldPrint = true
): void => {
  if (!node) return;

  visited.set(node.data, true);

  shouldPrint && console.log(node.data);

  node.adjacent.forEach(item => {
    if (!visited.has(item.node.data)) {
      depthFirstSearchInner(item.node, visited, shouldPrint);
    }
  });
};

export const depthFirstSearch = <T>(nodes: GraphNode<T>[]) => {
  const visited: Map<T, boolean> = new Map();
  nodes.forEach(node => {
    if (!visited.has(node.data)) {
      depthFirstSearchInner(node, visited);
      console.log("\n");
    }
  });
};
