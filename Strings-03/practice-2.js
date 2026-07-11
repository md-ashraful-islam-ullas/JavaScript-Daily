// 3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost:$___' (hint: calculate in cents to avoid inaccuracies)

'Total cost: $' +  ((599 + 295) / 100) ;


// 3h. Do the same thing as 3g, but use a template string and interpolation.

`Total cost: $${(599 + 295) / 100}` ;

// 3i. Display the text from 3h in a popup.

alert(`Total cost: $${(599+295) / 100}`);

// 3j. Using a multi-line string, create the text from 3h and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup. 

alert(`Total cost: $${(599+295) / 100} \nThank you, come again!`);