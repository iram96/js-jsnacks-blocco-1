/*
Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/
// const numberList = [];
let totalSumm = 0;


for (let i = 0; i < 3; i++){
    const userNumber = parseInt(prompt('Pick a number'));
    // numberList.push(userNumber);
    totalSumm += userNumber;
    
}

 console.log(totalSumm);
