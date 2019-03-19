/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  let loveRelations = [];
  for (let i = 0; i < preferences.length; i++) {
    const currentLove = preferences[i];
    if (!loveRelations[i + 1]) {
      loveRelations[i + 1] = [currentLove]
    } else {
      loveRelations[i + 1].push(currentLove)
    }
  }

  let count = 0;
  for (let i = 1; i < loveRelations.length; i++) {
    const currentLove = loveRelations[i];
    if (!currentLove) {
      continue;
    }
    for (let x = 0; x < currentLove.length; x++) {
      const next = currentLove[x];
      if (!next) {
        continue;
      }
      var nextLoves = loveRelations[next];
      for (let z = 0; z < nextLoves.length; z++) {
        const nextnext = nextLoves[z];
        if (!nextnext || nextnext == next) {
          continue;
        }
        let nextnextLoves = loveRelations[nextnext];
        for (let m = 0; m < nextnextLoves.length; m++) {
          if (nextnextLoves[m] == i && nextnextLoves[m] != nextnext) {
            count++;
            loveRelations[i].pop(x);
            loveRelations[next].pop(z);
            loveRelations[nextnext].pop(m);
          }
        }
      }
    }
  }
  return count;
};
