export const checkAnimal = (array) => {
  let hasDog = false;
  let hasCat = false;
  console.log('array', array)
  if (!array || array.length === 0) { return false; }
  array.forEach(item => {
    if (!item) { return false; };
    if (item.parody === 'porodi-sobak') {
      hasDog = true;
    } else if (item.parody === 'porodi-koshki') {
      hasCat = true;
    }
  });

  if (hasDog && hasCat) {
    return 'dog-cat';
  } else if (hasDog) {
    return 'dog';
  } else if (hasCat) {
    return 'cat';
  } else {
    return 'none';
  }
}