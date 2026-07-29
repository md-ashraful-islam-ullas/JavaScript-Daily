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

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));