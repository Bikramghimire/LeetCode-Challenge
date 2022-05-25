const word = "hi my name is bikram ghimire";
function getLongestWord(word) {
  let longestWord = "";
  const wordArry = word.split(" ");
  for (let i = 0; i < wordArry.length; i++) {
    if (wordArry[i].length > longestWord.length) {
      longestWord = wordArry[i];
    }
  }

  return longestWord;
}

const answer = getLongestWord(word);
console.log(answer);
