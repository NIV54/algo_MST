import { DirectedGraph } from "./directed-graph";

export class UndirectedGraph<T> extends DirectedGraph<T> {
  addEdge = (source: T, destination: T, weight: number = 0): void => {
    const sourceNode = this.addNode(source);
    const destinationNode = this.addNode(destination);

    sourceNode.addAdjacent(destinationNode, weight);
    destinationNode.addAdjacent(sourceNode, weight);
  };

  removeEdge = (source: T, destination: T): void => {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destination);
      destinationNode.removeAdjacent(source);
    }
  };
}
