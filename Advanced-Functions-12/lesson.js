// function greeting() {
//     console.log('hello');
// }

// greeting()

// const function1 = function() {
//     console.log('hello2');
// };

// function1();
// console.log(function1);
// console.log(typeof function1);
// console.log(greeting);

// const object1 = {
//     num: 2,
//     fun: function() {
//         console.log('hello3');
//     }
// }

// object1.fun();
// console.log(object1.fun);


// function fun(param) {
//     param();
// }

// fun(function() {
//     console.log('hello4');
// })

// setTimeout(function() {
//     console.log('Timeout');
//     console.log('TimeOut2');
// }, 3000);

// console.log('Next Line');

// setInterval(function() {
//     console.log('Interval');
// }, 3000);



// function callback(value, index) {
//     if (value === "Wash Dishes") return;
//     console.log(index, value);
// }

// callback("Make Dinner", 0);
// callback("Wash Dishes", 1);
// callback("Watch YouTube", 2);

[
    "Make Dinner", "Wash Dishes", "Watch YouTube"
].forEach(function(value, index) {
    if (value === "Wash Dishes") return;
    console.log(index, value);
})