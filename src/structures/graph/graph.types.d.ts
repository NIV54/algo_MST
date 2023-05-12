import { GraphNode } from "./graph-node";

export type GraphNodes<T> = Map<T, GraphNode<T>>;

export interface Edge<T> {
  node: GraphNode<T>;
  weight: number;
}
