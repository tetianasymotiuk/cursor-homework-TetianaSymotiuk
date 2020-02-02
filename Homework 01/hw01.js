let busTicket = 15.678;
let suitCase = 123.965;
let lunchBox = 90.2345;


let numberMax = Math.max(busTicket, suitCase, lunchBox);
console.log(numberMax);

let numberMin = Math.min(busTicket, suitCase, lunchBox);
console.log(numberMin);

let sum = (busTicket + suitCase + lunchBox);
console.log(sum); 

sumIntegers = Math.trunc(busTicket) + Math.trunc(suitCase) + Math.trunc(lunchBox);
console.log(sumIntegers);

let ceilNumber = Math.ceil(sum/100)*100;
console.log(ceilNumber);

//if(Math.floor(sum)%2===0){console.log("true")}else{console.log("false")};
let boolenSum = Math.floor(sum)%2===0;
console.log("Boolen sum: " + boolenSum);

let change = 500-sum;
console.log(change);

let averegePrice = parseFloat(((busTicket+suitCase+lunchBox)/3).toFixed(2));
console.log(averegePrice);


let discount = Math.random ()*100; //знижка у відсотках

console.log(discount);  //знижка у відсотках

let sumWithDiscount = (sum*discount)/100; //знижка в грошовому еквіваленті

console.log(+sumWithDiscount.toFixed(2));  //знижка в грошовому еквіваленті

let lost = (sum/2)-(sum-sumWithDiscount);  //втрачена вигода

console.log(lost);   //втрачена вигода

let templateLine = `Максимальне число - ${numberMax};<br>
Мінімальне число - ${numberMin};<br>
Вартісь всіх товарів - ${sum};<br>
Вартість всіх товарів (ціле значення) - ${sumIntegers};<br>
Вартість товарів округлена до сотень - ${ceilNumber};<br>
Парне число? - ${boolenSum};<br>
Решта з 500 - ${change};<br>
Середня вартість - ${averegePrice};<br>
Знижка - ${discount};<br>
Вартість зі знижкою - ${sumWithDiscount};<br>
Втрачена вигода - ${lost};<br>
`;
console.log(templateLine);

document.getElementById("div1").innerHTML = templateLine;