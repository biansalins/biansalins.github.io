function askQuestions(){

	var firstName = prompt('what is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	$('h2').text('Hello '+fullName);

	var userAge=prompt('How old are you?');

	userAge=parseInt(userAge);

	if (userAge >=18) {
		console.log('user is an adult.');
	} else if (userAge >=13) {
		console.log('User is a teenager.');
	} else {console.log('User is a child.');
	}

	if (firstName.toLowerCase() =='general' && lastName.toLowerCase() !=='assembly') {
		console.log('Hey there General!');
	}

	var faveColor=prompt('What is your favourite colour?').toLowerCase();
	if (faveColor=='red'||
		faveColor=='blue'||
		faveColor=='yellow'||
		faveColor=='green')
	{

	$('h2').css('color', faveColor);
} 
}

/*alert($); shows the java query file is loaded. when the page loads, when the user clicks the h3 heading, show or hide the next element*/
/*($)tells the java query file to perform a function*/

// when the page loads
$(function(){

$('img').on('click',askQuestions);

// hide the sections
	$('h3').next().hide();


	//when the user clicks an h3 heading
	$('h3').on('click', function(){


		// show or hide the next element - the word 'this' indicates the next element after each h3
		$(this).next().slideToggle(5000);

	}); 

});