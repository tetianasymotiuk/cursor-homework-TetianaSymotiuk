let busTicket = 15.678;
let suitCase = 123.965;
let lunchBox = 90.2345;
console.log(busTicket);
console.log(suitCase);
console.log(lunchBox);

console.log(Math.max(busTicket, suitCase, lunchBox));

console.log(Math.min(busTicket, suitCase, lunchBox));

let sum = (busTicket + suitCase + lunchBox);
console.log(sum); 

sumIntegers = Math.trunc(busTicket) + Math.trunc(suitCase) + Math.trunc(lunchBox);
console.log(sumIntegers);

console.log(Math.ceil(sum/100)*100);

if(299%2===0){console.log("true")}else{console.log("false")};

console.log(change = 500-sum);

console.log(parseFloat(((busTicket+suitCase+lunchBox)/3).toFixed(2)));


let discount = Math.random ()*100; //знижка у відсотках

console.log(discount);  //знижка у відсотках

let sumWithDiscount = (sum*discount)/100; //знижка в грошовому еквіваленті

console.log(+sumWithDiscount.toFixed(2));  //знижка в грошовому еквіваленті

let lost = (sum/2)-(sum-sumWithDiscount);  //втрачена вигода

console.log(lost);   //втрачена вигода

const templateLine = `Максимальне число - 123.965
Мінімальне число - 15.678
Вартісь всіх товарів - 229.8775
Вартість всіх товарів (ціле значення) - 228
Вартість товарів округлена до сотень - 300
Парне число? - false
Решта з 500 - 270.1225
Середня вартість - 76.63
Знижка - 58%
Вартість зі знижкою - 135.14
Втрачена вигода - 25.6`

console.log(templateLine);







