/*
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
*/

console.log('JS ok');

const firstUserNumber = parseInt(prompt('Pick a number'));
const secondUserNumber = parseInt(prompt('Pick another number'));
console.log(firstUserNumber);
console.log(secondUserNumber);

let message = 'You picked the same number!';
if (firstUserNumber > secondUserNumber){
    message = `${firstUserNumber} is the biggest number!`
} else if (firstUserNumber < secondUserNumber){
    message = `${secondUserNumber} is the biggest number!`
}

console.log(message);

const documentElement = document.getElementById('display');

// documentElement.innerHTML = `
// <div>First Number: ${firstUserNumber}</div>
// <div>Second Number: ${secondUserNumber}</div>
// <div>End Result: ${message}</div>
// `

documentElement.innerHTML = `
<div>First Number: ${firstUserNumber}</div>
<div>Second Number: ${secondUserNumber}</div>
<div>End Result: ${message}</div>
`;





