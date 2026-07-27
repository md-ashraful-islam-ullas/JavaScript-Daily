function addNum(array, num) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + num);
    }

    return newArray;
}

console.log(addNum([2,3,4], 2));