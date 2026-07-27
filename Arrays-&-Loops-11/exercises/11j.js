function addArrays(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }

    return newArray;
} 

console.log(addArrays([2,3,4], [5, 6,1]));