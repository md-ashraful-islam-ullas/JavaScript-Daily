function removeEgg(food) {
    let newFood = [];
    let count = 0;

    for (let i = 0; i < food.length; i++) {
        // 11s.js
        if (food[i] === 'egg' && count < 2) {count++; continue;}
        else newFood.push(food[i]);
    }

    return newFood;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));