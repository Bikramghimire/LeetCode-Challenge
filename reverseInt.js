let num = 123;
function reverseInt() {
  let numArray = num.toString().split("");
  let reverseArray = [];
  for (let i = numArray.length - 1; i >= 0; i--) {
    reverseArray.push(numArray[i]);
  }
  return reverseArray.join("");
}
const ans = parseInt(reverseInt());
console.log(ans);
