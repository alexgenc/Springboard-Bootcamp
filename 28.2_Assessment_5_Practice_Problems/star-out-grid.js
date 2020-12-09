function starOutGrid(grid) {
  const arrIdx = [];
  const starIdx = [];
  // find the arrays that contain a '*'
  grid.forEach((arr, index) => arr.includes('*') ? arrIdx.push(index) : null);
  
  // find the index of star within those arrays
  for (i of arrIdx) {
    starIdx.push(grid[i].findIndex(el => el === '*'));
  }

  // star out all the items in the arrays that contain a star
  for (i of arrIdx) {
    // get the nested array that contains a star
    containingArr = grid[i];
    // star out each item in those arrays
    containingArr.forEach((item, i) => item !== '*' ? containingArr[i] = '*' : null);
  }

  // star out the matching columns in the remaining arrays
  for (item of arrIdx) {
    for (index of starIdx) {
      for (i = 0; i < grid.length; i++) {
        if (i !== item) {
          grid[i][index] = '*';          
        }
      }
    }
  }

  return grid;
}