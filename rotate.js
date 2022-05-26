const arry = [1, 2, 1, 3, 4, 3, 5];

function filterArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
  }
}
filterArray(arry);
