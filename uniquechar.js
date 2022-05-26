let word = "leeetCode";
function findUniqueChar() {
  let wordArray = word.split("");
  let counter = [];
  for (let i = 0; i < wordArray.length; i++) {
    counter.push(wordArray[i]);
    for (let j = 0; j < wordArray.length; j++) {
      if (i !== j) {
        if (wordArray[i] !== wordArray[j]) {
          return wordArray[j];
        }
      }
    }
  }
}

const ans = findUniqueChar();
console.log(ans);
