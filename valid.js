const s = "anagram";
const t = "nagaram";

// let arrOfCharactes = characters.split("");
// let arrOfDocuments = document.split("");
// if (arrOfCharactes.sort().toString()
// console.log(word.split("").sort().join(""));
function validAngrama(s, t) {
  const sData = s.split("").sort().join("");
  const tData = t.split("").sort().join("");
  if (sData === tData) {
    return true;
  } else {
    return false;
  }
}
const ans = validAngrama(s, t);
console.log(ans);
