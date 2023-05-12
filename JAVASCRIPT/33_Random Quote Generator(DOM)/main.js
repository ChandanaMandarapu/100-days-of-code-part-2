const button = document.getElementById('btn');
const quote = document.getElementById('quote');

const quotes = [
	'The only way to do great work is to love what you do. - Steve Jobs',
	'Innovation distinguishes between a leader and a follower. - Steve Jobs',
	'If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein',
	'The best way to predict your future is to create it. - Abraham Lincoln',
	'Believe you can and you\'re halfway there. - Theodore Roosevelt',
	'You miss 100% of the shots you don\'t take. - Wayne Gretzky'
];

button.addEventListener('click', function() {
	let randomQuote = Math.floor(Math.random() * quotes.length);
	quote.innerText = quotes[randomQuote];
});
