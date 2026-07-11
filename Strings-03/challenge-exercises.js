// Setup: in the Amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.

// (Text inside the order summary box)
// Items (4): $57.88
// Shipping & handling: $9.98
// Total before tax: $67.86
// Estimated tax (10%): $6.79
// Order total: $74.65

// 3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).

`Items (${2+2}): $${((2095*2)+ (799*2)) / 100}`;

// 3l. Create second line of text: 'Shipping & handling: $9.98' (use math).

`Shipping & handling: $${(499*2)/100}`;

// 3m. Create third line: 'Total before tax: $67.86' (use math).

`Total before tax: $${(((2095*2)+ (799*2)) / 100) + ((499*2)/100)}`;

// 3n. Create fourth line of text: 'Estimated tax (10%): $6.79' (use math and Math.round(...); to calculate the exact number).

`Estimated tax (${10}%): $${Math.round(((2095*2) + (799*2) + (499*2)) * .10) / 100}`;

// Pop up all the text

alert(`Items (${2+2}): $${((2095*2)+ (799*2)) / 100} \nShipping & handling: $${(499*2)/100} \nTotal before tax: $${(((2095*2)+ (799*2)) / 100) + ((499*2)/100)} \nEstimated tax (${10}%): $${Math.round(((2095*2) + (799*2) + (499*2)) * .10) / 100}`);


// Finish: change the cart back to 1 basketball, 1 t-shirt (both free shipping).