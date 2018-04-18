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
describe('GraphAL.toString()', () => {
  it(`should equal to\n${graphStr}`, () => {
    assert.equal(graphAL.toString(), graphStr);
  });
});