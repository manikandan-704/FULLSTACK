function longestWord(str) {
  let words = str.split(" "); //splits the sentence ["Finding", "the", "longestWord", "Sentence!!!!!"]
  let longest = "";
  for (let word of words) {
    //loop through the words
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("Finding the longestWord in the Sentence!!!!!"));
