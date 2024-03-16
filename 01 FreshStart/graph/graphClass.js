function Vertix(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v;

  this.edges = 0;

  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    // this.adj[i].push(" ");
  }

  this.addEdges = addEdges;

  this.showGraph = showGraph;

  this.dfs = dfs;

  this.marked = [];
  for (let i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }

  this.edgeTo = [];

  this.bfs = bfs;
  this.showPath = showPath;
}

//connect the edges of the graph
function addEdges(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

//print the graph
function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(i + " => ");
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j]) console.log(this.adj[i][j] + " ");
    }
    console.log();
  }
}

//dept first search
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) console.log("Vertices visited " + v);
  for (let i of this.adj[v]) {
    if (!this.marked[i]) {
      this.dfs(i);
    }
  }
}

//unfinished breadth first search
function bfs(s) {
  let queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    let v = queue.shift();
    console.log(v);
    if (v !== undefined) {
      console.log("Dept visited " + v);
    }
    for (let i of this.adj[v]) {
      console.log(i);
      if (!this.marked[i]) {
        // this.bfs(i);
        this.edgeTo[i] = v;
        this.marked[i] = true;
        queue.push(i);
      }
    }
  }
}

function showPath(v) {
  if (!this.marked[v]) return undefined;
  let source = 0;
  let path = [];
  for (let i = v; i > source; i--) {
    path.push(i);
  }
  // path.push(v);
  console.log(path);
}

let g = new Graph(5);
g.addEdges(0, 4);
g.addEdges(0, 2);
g.addEdges(1, 3);
g.addEdges(2, 4);
g.addEdges(1, 0);
g.showGraph();
g.dfs(0);
// g.bfs(0);
g.showPath(4);
