import { Queue } from "../../queue";
import { GraphNode } from "../graph-node";
import type { GraphNodeMap } from "../graph.types";

const breadthFirstSearchInner = <T>(
  node: GraphNode<T> | undefined,
  visited: Map<T, boolean>
): void => {
  const queue: Queue<GraphNode<T>> = new Queue();

  if (!node) return;

  queue.enqueue(node);
  visited.set(node.data, true);

  while (!queue.isEmpty()) {
    node = queue.dequeue();

    if (!node) continue;

    console.log(node.data);

    node.adjacent.forEach(item => {
      if (!visited.has(item.node.data)) {
        visited.set(item.node.data, true);
        queue.enqueue(item.node);
      }
    });
  }
};

export const breadthFirstSearch = <T>(nodes: GraphNodeMap<T>) => {
  const visited: Map<T, boolean> = new Map();
  nodes.forEach(node => {
    if (!visited.has(node.data)) {
      breadthFirstSearchInner(node, visited);
    }
  });
};
