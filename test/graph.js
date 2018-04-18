const assert = require('assert');
const GraphAL = require('../data-structures/Graph/GraphAL');

let graphStr = `0 -> 4 2
1 -> 4
2 -> 0 3 4
3 -> 2 4
4 -> 0 1 2 3`;

let graphAL = new GraphAL(5);
graphAL.addEdge(0, 4);
graphAL.addEdge(0, 2);
graphAL.addEdge(1, 4);
graphAL.addEdge(2, 3);
graphAL.addEdge(2, 4);
graphAL.addEdge(3, 4);
describe('GraphAL', () => {
  describe('.toString()', () => {
    it(`should equal to\n${graphStr}`, () => {
      assert.equal(graphAL.toString(), graphStr);
    });
  });

  describe('.dfs(0)', () => {
    let dfsStr = graphAL.dfs(0).join(),
      testStr = '0,4,1,2,3';

    it(`should be ${testStr}`, () => {
      assert.equal(dfsStr, testStr);
    });
  });

  describe('.bfs(0)', () => {
    let bfsStr = graphAL.bfs(0).join(),
      testStr = '0,4,2,1,3';

    it(`should be ${testStr}`, () => {
      assert.equal(bfsStr, testStr, bfsStr);
    });
  });
});