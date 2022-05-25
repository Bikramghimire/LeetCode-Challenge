let duplicateData = [0, 0, 1, 1, 1, 2, 3, 4, 4];
function removeDuplicate(data) {
  let counter = 0;
  let notDuplicate = [];
  for (let i = 0; i < data.length; i++) {
    notDuplicate.push(data[i]);
    for (let j = 0; j < data.length; j++) {
      if (i != j) {
        if (data[i] === data[j]) {
          notDuplicate.pop(data[i]);
        }
      }
    }
  }
  console.log("the data is ", notDuplicate, counter);
}

removeDuplicate(duplicateData);
