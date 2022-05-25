const arr = [1, 2, 3, 4, 5];

function containDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
  }
  return false;
}

const ans = containDuplicate(arr);
console.log(ans);
