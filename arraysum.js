let values = [1, 2, 4, 6, 12];
// function SumArray() {
//   const sum = value.reduce((a, n) => a + n, 0);
//   console.log(sum);
// }
function sumArray(values) {
  let counter = 0;
  for (let i = 0; i < values.length - 1; i++) {
    counter = values[i] + counter;
  }
  if (counter !== values[values.length - 1]) {
    return false;
  } else {
    return true;
  }
}
const ans = sumArray(values);
console.log(ans);
