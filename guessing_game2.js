var question1 = prompt('Do I like to Downhill Mountain Bike?');
var question2 = prompt('Do I prefer 26 inch tires over 29 inch tires, yes or no?');
var question3 = prompt('Why did you answer yes or no on the last question?')
var question4 = prompt('Why do you think I would want 8 inchs of travel when I am riding downhill?');

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);

alert('Do you like to downhill mountain bike? You said ' + question1 + '!');
alert('Do I prefer 26 inch tires over 29 inch tires, you said ' 
	   + question2 + '!' + ' Your reason was ' + '"' + question3 + 
	   '"' + '!' );
alert('Why do you think I would prefer 8 inches of travel, you said ' + '"' 
	+ question4 + '"' + '!');