let startN = parseInt(prompt("Уведіть число N"), 10); //чи ціле число

console.log( "Number N : ",  startN);

console.log(Number.isInteger(startN)); //переведення з string в number

let finishM = parseInt(prompt("Уведіть число M"), 10);

console.log( "Number M : ", finishM);

console.log(Number.isInteger(finishM));

let answer = confirm("Пропускати парні числа?");
console.log("answer : ", answer);

