import { DirectedGraph } from "../structures/graph";
import { ConntectedNodes } from "../structures/graph/graph.types";
import { isConnectedTree } from "../structures/graph/utils/isConntectedGraph";

/**
 *
 * @param graph Graph after MSTPrime execution
 * @param edge Edge to remove (contains source and target nodes)
 */
export const RemoveEdgeFromMST = (graph: DirectedGraph<any>, edge: ConntectedNodes<any>) => {
  const removedEdge = graph.removeEdge(edge.source.data, edge.destination.data);
  if (removedEdge) {
    if (!isConnectedTree(graph.getNodes())) {
      console.log("The graph is not connected");
    }
  } else {
    console.log("Edge does not exist on graph");
  }
};
