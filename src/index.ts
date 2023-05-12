import { MSTPrim, printMST } from "./exercises/exercise1";
import { UndirectedGraph } from "./structures/graph";
import { GraphNode } from "./structures/graph/graph-node";

const graph = new UndirectedGraph<string>();

const source = new GraphNode("a");

graph.addEdge("a", "b", 12);
graph.addEdge("a", "c", 23);
graph.addEdge("a", "d", 5);

graph.addEdge("b", "f", 7);

graph.addEdge("c", "d", 18);
graph.addEdge("c", "e", 17);

graph.addEdge("d", "f", 10);
graph.addEdge("d", "g", 9);

graph.addEdge("e", "i", 16);
graph.addEdge("e", "j", 14);

graph.addEdge("f", "l", 20);

graph.addEdge("g", "h", 4);
graph.addEdge("g", "j", 3);

graph.addEdge("h", "l", 8);

graph.addEdge("i", "k", 7);

graph.addEdge("k", "l", 12);

MSTPrim(graph, source);

printMST(graph);
