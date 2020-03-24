// function 1
function getRandomArray(length, min, max) {
    let arr = [];
    for(let i=0; i<length; i++) {
        arr[i] = Math.floor(Math.random() * (max-min));
    } return arr;
}
console.log('hw 05 - random array', getRandomArray(15, 1, 100));

// // function 3
// function getAverage(...numbers) {
//     let arr = numbers.filter(item => (parseFloat(item) - parseInt(item)) === 0);
//     return (arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/arr.length;
// }
// console.log('середнє арифметичне');
// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// // function 5
// function filterEvenNumbers(...numbers) {
//     return numbers.filter(item => ((parseFloat(item) - parseInt(item)) === 0) && item % 2);
// }
// console.log('фільтр парних чисел');
// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// // function 6
// function countPositiveNumbers(...numbers) {
//     let arr = numbers.filter(item => (parseFloat(item) - parseInt(item)) === 0);
//     return arr.reduce((sum, item) => {
//         if(item>0){
//             sum++
//         }return sum;
//     },0);

// }
// console.log('кількість чисел більше 0');
// console.log(countPositiveNumbers(0, 4, -5, 5, -8,));

// // function 7
// function getDividedByFive(...numbers) {
//     let arr = numbers.filter(item => (parseFloat(item) - parseInt(item)) === 0);
//     return arr.filter(item => item % 5 === 0);
// }
// console.log('числа, які діляться на 5');
// console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// // function 8
// function replaceBadWords(string) {
//     let badWords = ['shit', 'fuck'];
//     let arr = string.split(' ');
//     for (i=0; i<badWords.length; i++) {
//         arr = arr.map((value) => {
//             return value.replace(badWords[i], '*'.repeat(badWords[i].length));
//         });
//     }return arr.join(' ');
// };
// console.log('заміна поганих слів');
// console.log(replaceBadWords("It's bullshit!"));

// let templateLine = `
// Масив випадкових чисел (15, 1, 100) => ${getRandomArray(15, 1, 100)};<br>
// Середнє арифметичне (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};<br>
// Фільтр парних чисел (1, 2, 3, 4, 5, 6) => ${filterEvenNumbers(1, 2, 3, 4, 5, 6)};<br>
// Кількість чисел більше 0 (0, 4, -5, 5, -8,) => ${countPositiveNumbers(0, 4, -5, 5, -8,)};<br>
// Числа, які діляться на 5 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};<br>
// Заміна поганих слів ("It's bullshit!") => ${replaceBadWords("It's bullshit!")};<br>
// `;
// console.log(templateLine);

// document.getElementById("div1").innerHTML = templateLine;