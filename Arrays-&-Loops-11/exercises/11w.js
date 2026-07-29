function findIndex(array, word) {
    let idx = 0;
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            idx = i;
            flag = true;
            break;
        }
    }

    if (!flag) return -1;
    else return idx;
}

function unique(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (findIndex(newArray, array[i]) === -1) newArray.push(array[i]);
    }

    return newArray;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

console.log(unique(['green', 'red', 'green', 'red']));