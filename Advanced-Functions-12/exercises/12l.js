function countPositive(nums) {
    let positiveNum = 0
    nums.forEach((value) => {
        if (value > 0) positiveNum++;
    });

    return positiveNum;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([1,-3,5, -5, 5, 9, -9, 2]));