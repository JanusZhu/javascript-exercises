const palindromes = function (word) {
  //console.log(word);
  if (word.length == 0) {
    return true;
  }
  if (word.length == 1) {
    return true;
  }
  let l = 0;
  let r = word.length - 1;
  //get ride of non-letters
  while (word[l].toLowerCase() == word[l].toUpperCase()) {
    l += 1;
  }
  while (word[r].toLowerCase() == word[r].toUpperCase()) {
    r -= 1;
  }
  return word[l].toLowerCase() == word[r].toLowerCase()
    ? palindromes(word.slice(l + 1, r))
    : false;
};

//console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
