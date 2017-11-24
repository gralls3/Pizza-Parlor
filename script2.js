var totalCost = 0;
var optionArray = document.getElementById('orderForm').getElementsByClassName('Option');// ^Options in Form element...
    // (id=orderform) treated like an array^
var count;

function getCheckedOptions()	{ // Get checked options from menu then pass along for pricing
    var meatTotal = 0;
    var vegTotal = 0;
		for (count = 0; count < optionArray.length; count++)    { // As long as count < no. items in array, keep going
            if (optionArray[count].checked)	{ // If item/Option is checked...
                if (optionArray[count].name === 'Meat') { // If it's Meat (name=Meat)...
                    meatTotal += 1; // Increment Meat count and...
                    priceCalc(optionArray[count], meatTotal); // Pass item and count to next function
                } else if (optionArray[count].name === 'Veggies') { // If it's Veg (name=Veggies)
                    vegTotal += 1; // Increment Veg count and...
                     priceCalc(optionArray[count], vegTotal); // Pass item and count to next function
                } else  {
                    priceCalc(optionArray[count]) // If it's not Meat or Veg, just pass along the item
                }
			}
        }   window.location = '#invoice'; // Jump to the Invoice anchor of the page so user sees it after pressing Submit
}

function priceCalc(Option, VegOrMeatCount)  {
// Assign price to each Option passed from getCheckedOptions() then pass to next Function
    var Price;
    if  (Option.name === 'Meat' && VegOrMeatCount > 1)    {
        Price = 1; // First Veg and Meats are free, so check if each Option not 1st; if so, charge
    }   else if (Option.name === 'Veggies' && VegOrMeatCount > 1) {
        Price = 1; // First Veg and Meats are free, so check if each Option not 1st; if so, charge
    }   else if (Option.value === 'Extra Cheese')   {
        Price = 3;
    }   else if (Option.value === 'Cheese Stuffed')   {
        Price = 3;
    }   else if (Option.value === 'Personal Pizza')    {
        Price = 6;
    }   else if (Option.value === 'Small Pizza')    {
        Price = 10;
    }   else if (Option.value === 'Large Pizza')    {
        Price = 14;
    }   else if (Option.value === 'X Large Pizza')    {
        Price = 16;
    }   else    { // All Options above have cost > $0; rest (else) $0
        Price = 0;
    }   printInvoice(Option, Price); // Send each time and price to Invoice function
}

function printInvoice (Option, Price) {
    // Create an invoice from the priced options
    totalCost = totalCost + Price;
    var newP = document.createElement("P"); // Create a new P element to place the item in and put in this var
    var newContent = document.createTextNode(Option.value + " $" + Price); // Creat text node to put in the P element
    newP.appendChild(newContent); // Append text node to new P element
    var currentP = document.getElementById("Invoice"); // Get P element where you want to start inserting, put in var 'currentP'
    document.body.insertBefore(newP, currentP); // Insert new P element at the currentP place
    if (Option.name === 'Crust')   { // Last Option in the menu list is Crust. When you get to Crust...
        document.getElementById("Total").innerHTML = // Find the 'Total' element and...
        "Total cost is  $" + totalCost; // Display the total
    }
}
