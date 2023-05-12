import { DirectedGraph } from "../structures/graph";
import { GraphNode } from "../structures/graph/graph-node";
import { MinHeap } from "../structures/heap";
import type { OrdComparator } from "../structures/common.types";

type NodeData = any;

type Node = GraphNode<NodeData>;

export const MSTPrim = (graph: DirectedGraph<NodeData>, source: Node) => {
  const comparator: OrdComparator<Node> = (a, b) =>
    a.key > b.key ? "GT" : b.key > a.key ? "LT" : "EQ";

  const heap = new MinHeap<Node>({ comparator });

  graph.getNodes().forEach(node => node.upsertProp("key", Number.MAX_VALUE));
  source.upsertProp("key", 0);
  source.upsertProp("parent", null);

  graph.getNodes().forEach(node => heap.push(node));

  while (!heap.isEmpty()) {
    const node = heap.pop();
    if (!node) break;
    node.adjacent.forEach(adjacent => {
      if (heap.exists(adjacent.node) && adjacent.weight < adjacent.node.key) {
        adjacent.node.upsertProp("parent", node);
        adjacent.node.upsertProp("key", adjacent.weight);
        heap.heapify();
      }
    });
  }
};

export const printMST = (graph: DirectedGraph<NodeData>) =>
  graph.getNodes().forEach(node => console.log(node.data, node.parent?.data || "null"));
