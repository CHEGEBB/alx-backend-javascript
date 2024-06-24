export default function iterateThroughObject(reportWithIterator) {
  const myArr = reportWithIterator;
  const size = myArr.length;
  let myString = '';
  for (const item of myArr) {
    myString += `${item}`;
    if (myArr[size - 1] === item) {
      break;
    }
    myString += ' | ';
  }
  return myString;
}
