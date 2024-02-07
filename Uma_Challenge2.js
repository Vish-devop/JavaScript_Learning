// Challenge (2): 
//1. At a restaurant, you order 1 soup of Rs-10, 3 burgers for Rs-8 each, and 1 ice-cream for Rs-5. Use JavaScript to calculate the cost of the order. 
const soupPrice=10;
const burgerPrice=8;
const iceCreamPrice=5;

const soupQuantity=1;
const burgerQuantity=3;
const iceCreamQuantity=1;

const soupOderCost=soupPrice*soupQuantity;
const burgerOderCost=burgerPrice*burgerQuantity;
const iceCreamOrderCost=iceCreamPrice*iceCreamQuantity;

const totalOrderCost = soupOderCost+burgerOderCost+iceCreamOrderCost;

console.log("Soup cost: Rs-" + soupOderCost);
console.log("Burger cost: Rs-" + burgerOderCost);
console.log("iceCream cost: Rs-" + iceCreamOrderCost);
console.log("Total cost of the order: Rs-" + totalOrderCost);

//2. You're at a restaurant with 2 friends (3 people in total) and make the same order as above 1. Calculate how much each person pays. 
const numberOfPeopleOrdered = 3;
//if they are order same quantity and items each person will pay same totoal amount
console.log("Each person paid: Rs-" + (totalOrderCost * 3/3));

//3. Calculate the total cost of a toaster (Rs-18.50) and 2 Shirts (7.50 each). 
const toasterPrice = 18.50;
const shirtPrice=7.50;

const totalShoppingCost=toasterPrice+(2*7.50);
console.log("Total cost of shopping: Rs-" + totalShoppingCost);

//4. Calculate a 10% tax for the total in above (qos-3).
const tax=10;
const taxAmount=totalShoppingCost*tax/100;
console.log("10% Tax on shopping: Rs-" + taxAmount);

//5. Calculate a 20% tax for the total in (qos 3) (remember that 1% = 1/100, so 20% = 2/100).
console.log("20% Tax on shopping: Rs-" + (totalShoppingCost*20/100));

//6. The temperature is 25 degree Celcius. Calculate the temperature in Fahrenheit.
const calciusTemperature=25;
const fahrenheitTemperature=(calciusTemperature*9/5)+32;
console.log("The temperature in Fahrenheit is: "+fahrenheitTemperature+"F");

//7. The temperature is 86 degree Fahrenheit. Calculate the temperature in Celcius.
const fahrenheitTemperature1=86;
const calciusTemperature1=(fahrenheitTemperature1 - 32) * 5/9;
console.log("The temperature in Celcius is: "+calciusTemperature1+"C");

//8. The temperature is -5 degree Celcius. Calculate the temperature in Fahrenheit.

