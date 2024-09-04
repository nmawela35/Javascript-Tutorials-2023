/* 


These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill =() => {

const bill = Number(billInput.value) // get bill from user input and convert into a number
const tipPercentage = Number(tipInput.value)/100 // get tip from the user and convert to %
const tipAmount = bill*tipPercentage;
const total =bill + tipAmount;
const perPersonTotal =total/numberOfPeople;

perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// increment no. of people and update the DOM with new number
const increasePeople = () =>{
numberOfPeople += 1;
numberOfPeopleDiv.innerText = numberOfPeople
//update the bill with new number of people
calculateBill()
}

const decreasePeople = () =>{ 
  // guard clause in case number is decreased to below 1, it ends the function
  if (numberOfPeople <= 1){
/*     alert('You cannot have less than 1 person')
    return */
    throw 'You cannot have less than 1 person';
  }
numberOfPeople -= 1;
numberOfPeopleDiv.innerText = numberOfPeople

calculateBill() //update the bill with new number of people
}