/*L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstUserWord = prompt('Pick a word').trim();
const secondUserWord = prompt('Pick another word').trim();
console.log(firstUserWord);
console.log(secondUserWord);

let message = 'Those words are the same length!';

if (firstUserWord.length < secondUserWord.length){
    message = firstUserWord + ' ' + secondUserWord;
} else if (secondUserWord.length < firstUserWord.length){
    message = secondUserWord + ' ' + firstUserWord;
}

console.log(message);
const documentElement = document.getElementById('display');

documentElement.innerHTML = `
<div>First Word: ${firstUserWord}</div>
<div>Second Word: ${secondUserWord}</div>
<div>End Result: ${message}</div>
`;