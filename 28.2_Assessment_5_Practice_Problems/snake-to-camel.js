function snakeToCamel(str) {
  let res =  str.split('_').map(function(word, index){
    if (index === 0) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }).join('');

  return res;
}