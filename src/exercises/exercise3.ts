import { UndirectedGraph } from "../structures/graph";

import { MSTPrim, printMST } from "./exercise1";
import { RemoveEdgeFromMST } from "./exercise2";

const getGraph = () => {
  const graph = new UndirectedGraph<string>();
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
  graph.addEdge("l", "m", 12);
  graph.addEdge("m", "n", 12);
  graph.addEdge("n", "o", 12);
  graph.addEdge("o", "p", 12);
  graph.addEdge("p", "q", 12);
  graph.addEdge("p", "r", 12);
  graph.addEdge("r", "s", 12);
  graph.addEdge("t", "u", 12);
  graph.addEdge("u", "v", 12);
  graph.addEdge("v", "w", 12);
  graph.addEdge("w", "x", 12);
  graph.addEdge("x", "y", 12);
  graph.addEdge("y", "z", 12);
  graph.addEdge("z", "aa", 12);
  graph.addEdge("aa", "bb", 12);
  graph.addEdge("bb", "cc", 12);
  graph.addEdge("cc", "dd", 12);
  graph.addEdge("dd", "ee", 12);
  graph.addEdge("ee", "ff", 12);
  graph.addEdge("ff", "gg", 12);
  graph.addEdge("gg", "hh", 12);
  graph.addEdge("hh", "ii", 12);
  graph.addEdge("ii", "jj", 12);
  graph.addEdge("jj", "kk", 12);
  graph.addEdge("kk", "ll", 12);
  graph.addEdge("ll", "mm", 12);
  graph.addEdge("mm", "nn", 12);
  graph.addEdge("nn", "oo", 12);
  graph.addEdge("oo", "pp", 12);
  graph.addEdge("pp", "qq", 12);
  graph.addEdge("qq", "rr", 12);
  graph.addEdge("rr", "ss", 12);
  graph.addEdge("ss", "tt", 12);
  graph.addEdge("tt", "uu", 12);
  graph.addEdge("uu", "vv", 12);
  graph.addEdge("vv", "ww", 12);
  graph.addEdge("ww", "xx", 12);
  graph.addEdge("xx", "zz", 12);
  graph.addEdge("zz", "xx", 12);
  return graph;
};
export const run = () => {
  let node1, node2;

  console.log("MST");
  let graph = getGraph();
  let source = graph.getNodes()[0];
  MSTPrim(graph, source);
  printMST(graph);
  console.log("\n");

  console.log("MST without an edge (1)");
  graph = getGraph();
  source = graph.getNodes()[0];
  node1 = graph.getNodes().find(n => n.data == "zz")!;
  node2 = graph.getNodes().find(n => n.data == "xx")!;
  console.log(`${node1} <--> ${node2}`);
  //Does not change the mst
  RemoveEdgeFromMST(graph, { source: node1, destination: node2 });
  MSTPrim(graph, source);
  printMST(graph);
  console.log("\n");

  console.log("MST without an edge (2)");
  graph = getGraph();
  source = graph.getNodes()[0];
  node1 = graph.getNodes().find(n => n.data == "b")!;
  node2 = graph.getNodes().find(n => n.data == "f")!;
  console.log(`${node1} <--> ${node2}`);
  //Changes the mst
  RemoveEdgeFromMST(graph, { source: node1, destination: node2 });
  MSTPrim(graph, source);
  printMST(graph);
};
