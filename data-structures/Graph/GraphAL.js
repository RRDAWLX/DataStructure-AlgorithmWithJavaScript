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

  dfs(v, arr = []) {
    arr.push(v);
    let list = this.adj[v];
    for (let i = 0, len = list.length; i < len; i++) {
      if (!arr.includes(list[i])) {
        this.dfs(list[i], arr);
      }

      // 当图已被遍历，退出循环。
      if (arr.length >= this.vertices) {
        break;
      }
    }

    return arr;
  }

  bfs(v) {
    let arr = [v],
    i = 0;

    while(i < arr.length && arr.length < this.vertices) {
      let list = this.adj[arr[i]];

      for (let j = 0, len = list.length; j < len; j++) {
        if (!arr.includes(list[j])) {
          arr.push(list[j]);
        }

        // 当图已被遍历，退出循环。
        if (arr.length >= this.vertices) {
          break;
        }
      }

      i++;
    }

    return arr;
  }

  toString() {
    return this.adj.map((list, v) => {
      return `${v} -> ${list.join(' ')}`;
    }).join('\n');
  }
}

module.exports = GraphAL;