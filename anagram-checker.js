module.exports = function (first, second) {

  const buildCharObject = str => {
    const stem = {}
    for(let i of str.replace(/[^\w]/g,'').toLowerCase()) {
      stem[i] = stem[i] + 1 || 1;
    }
    return stem
  }

  const astem = buildCharObject(first);
  const bstem = buildCharObject(second);

  if(Object.keys(astem).length !== Object.keys(bstem).length) {
    return false
  }

  for(let v in astem) {
    if(astem[v] !== bstem[v]) {
      return false
    }
  }

  return true
}
