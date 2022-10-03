function getWord() {
  while (true) {
    let result = prompt("Enter the word");
    if (result === null) {
      break;
    } else if (result === "") {
      break;
    } else {
      arr.push(result);
    }
  }
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  const arrUpper = arr.map((word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  });
  console.log(arrUpper);
}
let arr = [];
getWord();
