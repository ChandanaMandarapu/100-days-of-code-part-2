const button = document.getElementById('btn');
const answerDiv = document.getElementById('answer');

const answers = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes, definitely', 'It is decidedly so', 'As I see it, yes', 'Most likely', 'Yes', 'Outlook good', 'Signs point to yes', 'Reply hazy, try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Concentrate and ask again', 'Don’t count on it', 'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no'];

button.addEventListener('click', function() {
	let question = document.getElementById('question').value;

	if (question === '') {
		answerDiv.innerText = 'Please ask a question';
		answerDiv.style.color = 'white';
	} else {
		let randomAnswer = Math.floor(Math.random() * answers.length);
		answerDiv.innerText = answers[randomAnswer];
		answerDiv.style.color = '#222';
	}
});
