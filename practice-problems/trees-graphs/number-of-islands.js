/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/


/*
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    if (grid.length === 0 || grid === null) {
      return;
    }

    let numberOfIslands = 0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '1') {
          numberOfIslands += getIslandCount(i, j, grid);
        }
      }
    }

    return numberOfIslands;
};

const getIslandCount = (i, j, grid) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
    return 0;
  }

  grid[i][j] = '0';

  getIslandCount(i + 1, j, grid);
  getIslandCount(i - 1, j, grid);
  getIslandCount(i, j + 1, grid);
  getIslandCount(i, j - 1, grid);

  return 1;
}