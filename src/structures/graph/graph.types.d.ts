import { GraphNode } from "./graph-node";

export type GraphNodeMap<T> = Map<T, GraphNode<T>>;

export interface Edge<T> {
  node: GraphNode<T>;
  weight: number;
}

export interface ConntectedNodes<T> {
  source: GraphNode<T>;
  destination: GraphNode<T>;
}
