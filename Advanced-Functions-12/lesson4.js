console.log([1, -3, 5].filter(value => {
    if (value > 0) return true;
    else return false;
}))

console.log([10, 20, 30].filter((value, index, array) => {
  console.log(array.length);
  return value > 15;
}))

console.log([1,2,3].map((value, index) => {
    return value *2;
}))