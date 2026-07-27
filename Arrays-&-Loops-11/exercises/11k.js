function countPositive(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }

    return count;
}

console.log(countPositive([0,-2,0, 2, 3,4, -4, 9]));