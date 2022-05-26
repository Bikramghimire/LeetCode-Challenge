const word = "my name is bikram ghimire";
function capitalLetter(word) {
  const wordArray = word.split(" ");
  const capitalWordArray = wordArray.map((word) => {
    let firstLetter = word.slice(0, 1);
    let restLetter = word.slice(1);
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + restLetter;
  });
  //   const capitalWordArray = wordArray.map(
  //     (item) => item.charAt(0).toUpperCase() + item.slice(1)
  //   );
  const result = capitalWordArray.join(" ");
  console.log(result);
}

capitalLetter(word);
