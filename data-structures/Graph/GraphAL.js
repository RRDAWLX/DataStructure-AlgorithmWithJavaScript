/**
 * 用连接表实现的图
 */

class GraphAL {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = 0;
    this.adj = [];

    for (let i = 0; i < vertices; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u);
    this.edges++;
  }

  toString() {
    return this.adj.map((list, v) => {
      return `${v} -> ${list.join(' ')}`;
    }).join('\n');
  }
}

module.exports = GraphAL;