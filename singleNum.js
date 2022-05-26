const arr = [1, 2, 2, 3, 4];

//function return first non-repeative value
function SingleNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr.length; j++) {
      if (i !== j) {
        if (arr[i] !== arr[j]) {
          return arr[i];
        }
      }
    }
  }
}

function SingleArray(arr) {
  let nonReapativeArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] !== arr[j]) {
          nonReapativeArray.push(arr[i]);
        }
      }
    }
  }
  return nonReapativeArray;
}

const ans = SingleArray(arr);
console.log(ans);
