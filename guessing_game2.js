var tally = 0;
var question1 = prompt('Do I like to Downhill Mountain Bike?');

if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y')  {
	alert("Yes, I love to Downhill Mountain Bike!");
	tally++;
} else {
	alert("No, I do love to Downhill Mountain Bike!");
}

var question2 = prompt('Do I prefer 26 inch tires over 29 inch tires, yes or no?');

if(question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y' )  {
  alert("That\'s correct, 26 inch tires give you better control!");	
  tally++;
} else {
	alert("No, I don\'t use 29 inch tires  due to less control.");
}


var question3 = prompt('Is 8 inches more preferred or 6 inchs of travel when downhill riding, yes or no?');

if(question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y')  {
	alert("Yes, 8 inches of travel absorbs more impact!");
	tally++;
} else {
	alert("No, 6 inches of travel doesn\'t absorb as much impact as 8 inches");
}

if(tally >= 2) {
	alert("You\'d make a great mountain biker!");
} else {
	alert("Might want to keep researching!");
}

alert("You got " + tally + " out of 3 Questions!" );

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);

