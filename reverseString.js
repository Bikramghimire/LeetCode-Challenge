let value = ["h", "e", "l", "l", "o"];
function reverseValue(value) {
  let reverseArray = [];
  for (let i = value.length - 1; i >= 0; i--) {
    reverseArray.push(value[i]);
  }
  return reverseArray;
}
const answer = reverseValue(value);
console.log(answer);
