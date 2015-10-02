var tally = 0;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var questions = ['Do I like to Downhill Mountain Bike?', 
                 'Do I like to Downhill Mountain Bike?',
                 'Is 8 inches more preferred or 6 inchs of travel when downhill riding, yes or no?'];
var answers =['yes','y','no','n'];

function ques1() {
	var question1 = prompt(questions[0]);

	if(question1.toLowerCase() === answers[0] || question1.toLowerCase() === answers[1]) {
		one.innerHTML = "Yes, I love to Downhill Mountain Bike!";
		img1.innerHTML = '<img src="img/img1.png" width = "200" />';
		tally++;		
	} else {
		one.innerHTML = "No, I do love to Downhill Mountain Bike!";
	}
}
ques1();

function ques2() {
	var question2 = prompt(questions[1]);
	if(question2.toLowerCase() === answers[0] || question2.toLowerCase() === answers[1]) {
	  two.innerHTML = "That\'s correct, 26 inch tires give you better control!";
	  img2.innerHTML = '<img src="img/img2.png" width = "200" />';
	  tally++;
	} else {
		two.innerHTML = "No, I don\'t use 29 inch tires  due to less control.";
	}
}
ques2();

function ques3() {
	var question3 = prompt(questions[2]);
	if(question3.toLowerCase() === answers[0] || question3.toLowerCase() === answers[1]) {
		three.innerHTML = "Yes, 8 inches of travel absorbs more impact!";
		img3.innerHTML = '<img src="img/img3.jpeg" width = "200" />';
		tally++;
	} else {
		three.innerHTML = "No, 6 inches of travel doesn\'t absorb as much impact as 8 inches";
	}
}
ques3();

if(tally >= 2) {
	alert("You\'d make a great mountain biker!");
} else {
	alert("Might want to keep researching!");
}

alert("You got " + tally + " out of 3 Questions!" );

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);
