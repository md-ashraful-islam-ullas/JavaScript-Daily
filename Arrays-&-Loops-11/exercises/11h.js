function addOne(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}

console.log(addOne([-2,-3,9, 0, 10]));
