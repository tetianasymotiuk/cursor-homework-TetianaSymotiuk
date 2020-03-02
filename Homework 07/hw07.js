const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 };
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 };
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 };

//function 1
function getMyTaxes(salary) {
    result = this.tax * salary;
    return result;
};
console.log(getMyTaxes.call(ukraine, 30000));

//function 2
function getMiddleTaxes() {
    result = this.tax * this.middleSalary;
    return result;
};
console.log(getMiddleTaxes.call(ukraine));

//function 3
function getTotalTaxes() {
    result = this.tax * this.middleSalary * this.vacancies;
    return result;
};
console.log(getTotalTaxes.call(ukraine));

//function 4
function getMySalary() {
    let result = {};
    let randomSalary = Math.round(1500 + Math.random() * 500);
    result.salary = randomSalary;
    result.taxes = this.tax * randomSalary;
    result.profit = result.salary - result.taxes;
    return console.log(result);
}

let timeOut = setTimeout(function wait() {
    getMySalary.call(ukraine);
    timeOut = setTimeout(wait, 10000);
}, 10000);

let templateLine = `
Завдання 1 => ${getMyTaxes.call(ukraine, 30000)};<br>
Завдання 2 => ${getMiddleTaxes.call(ukraine)};<br>
Завдання 3 => ${getTotalTaxes.call(ukraine)};<br>
Завдання 4 => дивись console;<br>

`;
console.log(templateLine);

document.getElementById("div1").innerHTML = templateLine;