const buttonElement = document.querySelector('.button');
const ParaElement = document.querySelector('.displayPara');

const array = ['“Take risks in your life. If you win, you can lead, if you lose, you can guide.” ― Swami Vivekananda',
'“Beware of little expenses; a small leak will sink a great ship.” ― Benjamin Franklin.',
'“Give me six hours to chop down a tree and I will spend the first four sharpening the axe.” ― Abraham Lincoln',
`“If you're afraid - don't do it, - if you're doing it - don't be afraid!” ― Genghis Khan`,
`“A man's greatest joy is crushing his enemies.” ― Genghis Khan`,
'“With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.” ― Muhammad Ali Jinnah',
'“Failure is a word unknown to me.” ― Muhammad Ali Jinnah',
'“The amount of stress you can tolerate while remaining effective is directly correlated to the level of success you will enjoy.” ― Andrew Tate',
'“A man without a vision for his future always returns to his past.” ― Andrew Tate', 
'“Arrogance is the cause of most first world poverty.” ― Andrew Tate'];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * array.length);
    const quote = array[randomIndex];
    ParaElement.textContent = quote;
}

buttonElement.addEventListener('click', generateRandomQuote);