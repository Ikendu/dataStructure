function Vertix(lebel) {
  this.label = label;
}
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.daj[i].push("");
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
      if (adj[i][j]) {
        console.log(adj[i][j]);
      }
    }
    console.log();
  }
}
