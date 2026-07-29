const myArray = ['hello', 'world','search', 'good', 'search', 'kitty'];

let idx = 0;
let flag = false;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === 'search') {
        idx = i;
        flag = true;
        // 11p.js
        break;
    }
}

if (flag === true) {
    console.log(idx);
} else {
    console.log(-1);
}