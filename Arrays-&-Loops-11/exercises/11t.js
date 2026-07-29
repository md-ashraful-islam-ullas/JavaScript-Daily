function removeEgg(food) {
    // 11u.js
    food = food.slice().reverse();
    let newFood = [];
    let count = 0;

    for (let i = 0; i < food.length; i++) {
        if (food[i] === 'egg' && count < 2) {count++; continue;}
        else newFood.push(food[i]);
    }

    return newFood.reverse();
}

const food = ['egg', 'apple', 'egg', 'egg', 'ham']

console.log(removeEgg(food));

console.log(food);