let startN = Math.round(prompt("Введіть число N:"));
let finishM = Math.round(prompt("Введіть число M:"));

if(startN == "" || startN !== parseInt(startN) || finishM == "" || finishM !== parseInt(finishM)) {
    alert("Номер введено не вірно!")
        } else { 
            let answer = confirm("Пропускати парні числа?");
            let sum = 0;
            let result = ``;
            if(answer){
                    for (let i=startN; i<=finishM; i++) {
                        if (i%2===0) {
                            continue;
                        } else {
                            sum = sum + i;
                        }
                    }
                    console.log("Сума чисел з парними числами: " + (sum));
                    result=`Сума чисел з парними числами: ${sum};
                    `;
                } else {
                    for (let a=startN; a<=finishM; a++) {
                        sum = sum + a;
                    }
                    console.log( "Number M : ", finishM);
                    console.log( "Number N : ",  startN);
                    console.log("Сума чисел: " + (sum));
                    result = `Сума чисел: ${sum};
                    `;
            };

document.getElementById("div1").innerHTML = result;
}

