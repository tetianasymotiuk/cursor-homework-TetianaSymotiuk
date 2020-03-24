const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// function 1
function getSubjects(student) {
    let result = [];
    result = Object.keys(student.subjects).map(value => {
        if(value.includes('_')){
            value = value.replace('_', ' ');
        }; return value[0].toUpperCase() + value.slice(1);
    }); return result;
};
console.log('hw 06 - students subjects', getSubjects(students[0]));

// // function 2
// function getAverageMark(students) {
//     let result = Object.values(students.subjects);
//     let length = 0;
//     let sum;
//     result = result.map(value => {
//         sum = 0;
//         for (let i=0; i<value.length; i++){
//             sum+=parseInt(value[i]);
//         }
//         length+=value.length;
//         return sum;
//     });
//     sum = 0;
//     for(let i=0; i<result.length; i++){
//         sum+=result[i];
//     }; return (sum/length).toFixed(2);
// };
// console.log(getAverageMark(students[0]));

// // function 3
// function getStudentInfo(students) {
//     let result = [];
//     let averageMark = getAverageMark(students);
//     result.course = students.course;
//     result.name = students.name;
//     result.averageMark = averageMark;
//     return result;
// };
// console.log(getStudentInfo(students[0]));

// // function 4
// const getStudentsNames = (students) => students.map(value => value.name).sort();
// console.log(getStudentsNames(students));

// // function 5
// function getBestStudent(students) {
//     let result = [];
//     let max = 0;
//     result.name = '';
//     result.averageMark = max;
//     let averageMark;
//     for(let i=0; i<students.length; i++) {
//         averageMark = getAverageMark(students[i]);
//         if (parseFloat(averageMark) > parseFloat(max)) {
//             max = averageMark;
//             result.name = students[i].name;
//         };
//     }; return result.name;
// };
// console.log(getBestStudent(students));

// // function 6
// function calculateWordLetters(string) {
//     let result = [];
//     let newString = string.toLowerCase();
//     for (let i=0; i<newString.length; i++){
//         if(!Object.keys(result).includes(newString[i])){
//             result[newString[i]] = 1;
//         } else result[newString[i]]+=1;
//     }; return result;
// };
// console.log(calculateWordLetters('тест'));

// let templateLine = `
// Список предметів для "Tanya" => ${getSubjects(students[0])};<br>
// Середня оцінка по предметах для "Tanya" => ${getAverageMark(students[0])};<br>
// Інформація про "Tanya" => ${getStudentInfo(students[0])};<br>
// Імена студентів а алфавітному порядку => ${getStudentsNames(students)};<br>
// Кращий студент за показником середньої оцінки => ${getBestStudent(students)};<br>
// Скільки разів повторюються букви в слові 'тест'? => ${calculateWordLetters('тест')};<br>
// `;
// console.log(templateLine);

// document.getElementById("div1").innerHTML = templateLine;










