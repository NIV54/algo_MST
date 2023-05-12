import { DirectedGraph } from "../structures/graph";
import { GraphNode } from "../structures/graph/graph-node";
import { exists, heapify, isEmpty, mkHeap, pop, push } from "../structures/heap";

type NodeData = any;

type Node = GraphNode<NodeData>;

export const MSTPrim = (graph: DirectedGraph<NodeData>, source: Node) => {
  const comparator = (a: Node, b: Node): "GT" | "LT" | "EQ" =>
    a.key > b.key ? "GT" : b.key > a.key ? "LT" : "EQ";

  let heap = mkHeap<Node>(comparator);

  graph.nodes.forEach(node => node.upsertProp("key", Number.MAX_VALUE));
  source.upsertProp("key", 0);
  source.upsertProp("parent", null);

  graph.nodes.forEach(node => push(node, heap));

  while (!isEmpty(heap)) {
    const node = pop(heap);
    if (!node) continue;
    node.adjacent.forEach(adjacent => {
      if (exists(heap, adjacent.node) && adjacent.weight < adjacent.node.key) {
        adjacent.node.upsertProp("parent", node);
        adjacent.node.upsertProp("key", adjacent.weight);
        heap = heapify(heap.data, comparator);
      }
    });
  }
};

export const printMST = (graph: DirectedGraph<NodeData>) =>
  graph.nodes.forEach(node => console.log(node.data, node.parent?.data || "null"));
