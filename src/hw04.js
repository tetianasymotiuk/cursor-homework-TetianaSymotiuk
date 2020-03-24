const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

function makePairs(students) {
    const boysStudents = ["Саша", "Игорь", "Алексей"];
    const girlsStudents = ["Лена", "Ира", "Светлана"];
    let pairsStudents = [];
    for(let i=0; i<Math.floor(students.length/2); i++) {
        pairsStudents [i] = [boysStudents[i], girlsStudents[i]];
    } return pairsStudents;
}
const pairsStudents = makePairs(students);
console.log('hw 04 - pairs students', pairsStudents);

// function takeThemes(pairsStudents, themes) {
//     let pairsHaveThemes = [];
//     for(let i=0; i<pairsStudents.length; i++) {
//         pairsHaveThemes [i] = [pairsStudents[i].join(" и "), themes[i]];
//     } return pairsHaveThemes;
// }
// const pairsHaveThemes = takeThemes(pairsStudents, themes);
// console.log(pairsHaveThemes);

// function getMarksStudents(students, marks) {
//     let studentsHaveMarks = [];
//     for(let i=0; i<students.length; i++) {
//         studentsHaveMarks [i] = [students[i], marks[i]];
//     }return studentsHaveMarks;
// }
// const studentsHaveMarks = getMarksStudents(students, marks);
// console.log(studentsHaveMarks);

// function getRandomeMarks(pairsHaveThemes) {
//     let pairsWithMarksForProject = [];
//     for(let i=0; i<pairsStudents.length; i++) {
//         pairsWithMarksForProject[i] = [pairsHaveThemes[i], Math.floor(((Math.random() * 5) + 1))].flat();
//     }return pairsWithMarksForProject;
// }
// const pairsWithMarksForProject = getRandomeMarks(pairsHaveThemes);
// console.log(pairsWithMarksForProject);

// let templateLine = `
// Пари студентів => ${pairsStudents};<br>
// Пари студентів і теми проектів => ${pairsHaveThemes};<br>
// Оцінки студентів => ${studentsHaveMarks};<br>
// Пари з випадковими оцінками => ${pairsWithMarksForProject};<br>
// `;
// console.log(templateLine);

// document.getElementById("div1").innerHTML = templateLine;


