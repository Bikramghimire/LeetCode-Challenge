const word = "ace car";
function palindrome(word) {
  let wordArray = word.split("");
  let index1 = wordArray.indexOf(" ");
  wordArray.splice(index1, 1);

  let reverseArray = word.split("").reverse();
  let index2 = reverseArray.indexOf(" ");
  reverseArray.splice(index2, 1);
  console.log(reverseArray.join(""));
  console.log(wordArray.join(""));
  if (reverseArray.join("") === wordArray.join("")) {
    return true;
  } else {
    return false;
  }
}
const ans = palindrome(word);
console.log(ans);
