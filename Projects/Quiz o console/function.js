

(function() {

	var Quiz = function(question, option, answer) {
		this.question = question;
		this.option = option;
		this.answer = answer;
		this.print = function() {
			console.log(this.question)
			for (var i = 0; i < option.length; i++) {
				console.log(i+ 1 + ":" + option[i])
			} 
		}
	}

	var q1 = new Quiz('Q1) What will be my new job title', ['Armed guard', 'Web-dev.', 'postman'], '2');
	var q2 = new Quiz('Q2) What is my age', [20, 23, 24], '3');
	var q3 = new Quiz('Q3) What city I live in ?', ['Winnipeg', 'Toronto', 'Alberta'], '1');


	var ques = ['', q1, q2, q3];

	var score = 0;

	function displayQuestions() {
		var random = Math.floor(Math.random() * 3+1);
		ques[random].print()
		var askQuestion = prompt('What is your answer (numbers only)');

		if (askQuestion === ques[random].answer) {
		score++;
		console.log("CORRECT!! \n Your current score is " + score + "\n================================")
		displayQuestions()
		} else if (askQuestion === 'quit') {
		console.log("Thanks for playing the game. \n ================")
		} else {
		console.log("INCORRECT!! \n Your Total score is " + score)
		}
	}

	displayQuestions();

})();