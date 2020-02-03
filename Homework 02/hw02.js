let startN = parseInt(prompt("Введіть число N"), 10); //переведення з string в numberчи ціле число

console.log( "Number N : ",  startN);

console.log(Number.isInteger(startN)); //чи ціле число

let finishM = parseInt(prompt("Введіть число M"), 10);

console.log( "Number M : ", finishM);

console.log(Number.isInteger(finishM));

let answer = confirm("Пропускати парні числа?");
console.log("answer : ", answer);

let sum = 0;

if(answer) {
    for (let i=startN; i<=finishM; i++) {
        if (i%2===0) {
            continue;
        }else {sum = sum + i;
        }
    }
    console.log("Сума чисел з парними числами: " + (sum));
    result=`Сума чисел з парними числами: ${sum};
    `;
}else{
    for (let a=startN; a<=finishM; a++) {
        sum = sum + a;
    }
    console.log("Сума чисел: " + (sum));
    result = `Сума чисел: ${sum};
    `;
};

document.getElementById("div1").innerHTML = result;
