const removeEgg = (array) => {
    // 12o.js
    let count = 0;
    return array.filter((value) => {
        if ((value === 'egg') && count < 2) {
            count++;
            return false;
        } else return true;
    })
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));