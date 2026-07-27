function countWords(array) {
    const result = {};

    for (let i = 0; i < array.length; i++) {
        if (!result[array[i]]) {
            result[array[i]] = 1;
        } else {
            result[array[i]]++;
        }
    }

    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']))