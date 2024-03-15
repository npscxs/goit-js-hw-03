function makeArray(firstArray, secondArray, maxLength) {
  const lengthArrays = firstArray.length + secondArray.length;
  let kombiArray = [];
  if (maxLength < lengthArrays) {
    kombiArray = firstArray.concat(secondArray);
    kombiArray = kombiArray.slice(0, maxLength);
  } else {
    kombiArray = firstArray.concat(secondArray);
  }
  return kombiArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
