// Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.  

// https://supersimple.dev/projects/amazon/checkout

// 2f. Calculate the cost of the products (before shipping and taxes).  

18.99 + 20.95 + 7.99;

// Hint: calculate in cents to avoid inaccuracies.  

// 2g. Calculate the Total before tax.  

(1899+2095+799 + 499 ) / 100;

// 2h. Calculate the 10% tax exactly.  

// Hint: use Math.round()

Math.round((1899+2095+799+499)*.1) / 100;

// 2i. Calculate Order total at the bottom.  

((1899+2095+799 + 499 ) / 100 ) + (Math.round((1899+2095+799+499)*.1) / 100);

// Finish: after finishing 2i remove the toaster from your cart.  

// 2j. Let's say we want to always round a number down (2.8 => 2) Using Google or an A.I. tool, search for the code to do this.  

Math.floor(2.8);

// 2k. Let's always round a number up (2.2 => 3). Search how to do this.

Math.ceil(2.2);