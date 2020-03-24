//function 1
function getMaxDigit(number) {
    number = number.toString();
    let max = 0;
    for (let i=0; i< number.length; i++) {
        if (max < number[i]) {
            max = number[i];
            }
        }
        return max;
}
console.log('hw 03 - max digit', getMaxDigit(12345));

// //function 3
// function getCorectName(name) {
//     name = name.toLowerCase();
//     let nameSlice = name.slice(1, name.length);
//     let corectName = name[0].toUpperCase() + nameSlice;
//     return corectName;
// }
 

// //function 4
// function sumWithoutTax(sum){
//     sum = sum - (sum * 0.195)
//     return sum;
// };


// //function 7
// function convertCurrency(str) {
//     let result = 'shoud be $ or UAH';
//     let dollars = parseInt(str, 10) * 25;
//     let hryvni = parseInt(str, 10) / 25;
//     if (str.indexOf('UAH') !== -1) {
//     result = hryvni;
//     }else if (str.indexOf('$')!== -1) {
//     result = dollars;
//     }
//     return result;
// }

// //function 8
// function getRandomPassword(passwordLength = 8) {
//     let password = '';
//     for (i=0; i<passwordLength; i++); {
//         password += Math.round(Math.random() * 100000000);
//     }
//     return password;
// }


// //function 10

// const isPalindrom = str => str.split('').reverse().join('') === str;


// let templateLine = `
// Функція 1 (12345)=> ${getMaxDigit(12345)};<br>
// Функція 3 (teTIana) => ${getCorectName('teTIana')};<br>
// Функція 4 (1000) => ${sumWithoutTax(1000)};<br>
// Функція 7 (2500UAH) => ${convertCurrency('2500UAH')}$;<br>
// Функція 8 => ${getRandomPassword()};<br>
// Функція 10 ()=> ${isPalindrom('madam')};<br>
// `;
// console.log(templateLine);

// document.getElementById("div1").innerHTML = templateLine;