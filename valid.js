const s = "anagram";
const t = "nagaram";

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
