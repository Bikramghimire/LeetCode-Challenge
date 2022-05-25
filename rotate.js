const data = [1, 2, 3, 4, 5, 6, 7, 8];
const index = 3;

function rotateArray(data, k) {
  let arr1 = [];
  let arr2 = [];
  let rotateArr = [];
  for (let j = 1; j <= k; j++) {
    if (j == 1) {
      for (let i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
          arr2.push(data[i]);
        } else {
          arr1.push(data[i]);
        }
      }
    }
    if (j == 2) {
      for (let i = 0; i < rotateArr.length; i++) {
        if (i === rotateArr.length - 1) {
          arr2.push(rotateArr[i]);
        } else {
          rotateArr.push(rotateArr[i]);
        }
      }
    }
    if (j == 3) {
      for (let i = 0; i < rotateArr.length; i++) {
        if (i === rotateArr.length - 1) {
          arr2.push(rotateArr[i]);
        } else {
          rotateArr.push(rotateArr[i]);
        }
      }
    }

    rotateArr = [...arr2, ...arr1];
    arr1 = [];
    arr2 = [];
  }

  console.log(arr1, arr2);
}
rotateArray(data, index);
