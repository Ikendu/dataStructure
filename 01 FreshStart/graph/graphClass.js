function Vertix(label) {
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
      if (this.adj[i][j]) console.log(this.adj[i][j] + " ");
    }
    console.log();
  }
}

let g = new Graph(9);
g.addEdges(2, 8);
g.addEdges(3, 2);
g.addEdges(7, 4);
g.addEdges(1, 3);
g.addEdges(4, 6);
g.showGraph();
