var question1 = prompt('Do I like to Downhill Mountain Bike?');

if(question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y')  {
	alert("Yes, I love to Downhill Mountain Bike!");
} else {
	alert("No, I do love to Downhill Mountain Bike!");
}

var question2 = prompt('Do I prefer 26 inch tires over 29 inch tires, yes or no?');

if(question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y' )  {
  alert("That\'s correct, 26 inch tires give you better control!");	
} else {
	alert("No, I don\'t use 29 inch tires  due to less control.");
}


var question3 = prompt('Is 8 inches more preferred or 6 inchs of travel when downhill riding, yes or no?');

if(question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y')  {
	alert("Yes, 8 inches of travel absorbs more impact!");
} else {
	alert("No, 6 inches of travel doesn\'t absorb as much impact as 8 inches");
}

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);

