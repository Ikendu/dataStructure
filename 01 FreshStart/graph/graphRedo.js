function Vertix(lebel) {
  this.label = label;
}
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdges = addEdges;
  this.showGraph = showGraph;
}
function addEdges(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}
function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(i + " => ");
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j]) {
        console.log(this.adj[i][j]);
      }
    }
    console.log();
  }
}

let network = new Graph(5);
network.addEdges(0, 4);
network.addEdges(1, 3);
network.addEdges(2, 1);
network.addEdges(3, 4);
// network.addEdges(0, 3);
network.showGraph();
