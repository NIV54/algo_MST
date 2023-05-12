import { DirectedGraph } from "./directed-graph";
import { ConntectedNodes } from "./graph.types";

export class UndirectedGraph<T> extends DirectedGraph<T> {
  addEdge = (source: T, destination: T, weight = 0): void => {
    const sourceNode = this.addNode(source);
    const destinationNode = this.addNode(destination);

    sourceNode.addAdjacent(destinationNode, weight);
    destinationNode.addAdjacent(sourceNode, weight);
  };

  removeEdge = (source: T, destination: T): ConntectedNodes<T> | null => {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destination);
      destinationNode.removeAdjacent(source);
      return { source: sourceNode, destination: destinationNode };
    }
    return null;
  };
}
