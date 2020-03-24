/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw01.js":
/*!*********************!*\
  !*** ./src/hw01.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var busTicket = 15.678;\nvar suitCase = 123.965;\nvar lunchBox = 90.2345;\nvar numberMax = Math.max(busTicket, suitCase, lunchBox);\nconsole.log(\"hw 01 - max number\", numberMax); // let numberMin = Math.min(busTicket, suitCase, lunchBox);\n// console.log(numberMin);\n// let sum = (busTicket + suitCase + lunchBox);\n// console.log(sum); \n// sumIntegers = Math.trunc(busTicket) + Math.trunc(suitCase) + Math.trunc(lunchBox);\n// console.log(sumIntegers);\n// let ceilNumber = Math.ceil(sum/100)*100;\n// console.log(ceilNumber);\n// if(Math.floor(sum)%2===0){console.log(\"true\")}else{console.log(\"false\")};\n// let boolenSum = Math.floor(sum)%2===0;\n// console.log(\"Boolen sum: \" + boolenSum);\n// let change = 500-sum;\n// console.log(change);\n// let averegePrice = parseFloat(((busTicket+suitCase+lunchBox)/3).toFixed(2));\n// console.log(averegePrice);\n// let discount = Math.random ()*100; \n// console.log(discount);  //знижка у відсотках\n// let cheaperAt = (sum*discount)/100; //знижка у % переведена в грошовий еквівалент\n// let sumWithDiscount = parseFloat((sum - cheaperAt).toFixed(2)); \n// console.log(sumWithDiscount); //вартість зі знижкою\n// let profit = sumWithDiscount - (sum/2);\n// console.log(profit); //прибуток\n// let templateLine = `Максимальне число - ${numberMax};<br>\n// Мінімальне число - ${numberMin};<br>\n// Вартісь всіх товарів - ${sum};<br>\n// Вартість всіх товарів (ціле значення) - ${sumIntegers};<br>\n// Вартість товарів округлена до сотень - ${ceilNumber};<br>\n// Парне число? - ${boolenSum};<br>\n// Решта з 500 - ${change};<br>\n// Середня вартість - ${averegePrice};<br>\n// Знижка - ${discount};<br>\n// Вартість зі знижкою - ${sumWithDiscount};<br>\n// Прибуток - ${profit};<br>\n// `;\n// console.log(templateLine);\n// document.getElementById(\"div1\").innerHTML = templateLine;\n\n//# sourceURL=webpack:///./src/hw01.js?");

/***/ }),

/***/ "./src/hw03.js":
/*!*********************!*\
  !*** ./src/hw03.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//function 1\nfunction getMaxDigit(number) {\n  number = number.toString();\n  var max = 0;\n\n  for (var i = 0; i < number.length; i++) {\n    if (max < number[i]) {\n      max = number[i];\n    }\n  }\n\n  return max;\n}\n\nconsole.log('hw 03 - max digit', getMaxDigit(12345)); // //function 3\n// function getCorectName(name) {\n//     name = name.toLowerCase();\n//     let nameSlice = name.slice(1, name.length);\n//     let corectName = name[0].toUpperCase() + nameSlice;\n//     return corectName;\n// }\n// //function 4\n// function sumWithoutTax(sum){\n//     sum = sum - (sum * 0.195)\n//     return sum;\n// };\n// //function 7\n// function convertCurrency(str) {\n//     let result = 'shoud be $ or UAH';\n//     let dollars = parseInt(str, 10) * 25;\n//     let hryvni = parseInt(str, 10) / 25;\n//     if (str.indexOf('UAH') !== -1) {\n//     result = hryvni;\n//     }else if (str.indexOf('$')!== -1) {\n//     result = dollars;\n//     }\n//     return result;\n// }\n// //function 8\n// function getRandomPassword(passwordLength = 8) {\n//     let password = '';\n//     for (i=0; i<passwordLength; i++); {\n//         password += Math.round(Math.random() * 100000000);\n//     }\n//     return password;\n// }\n// //function 10\n// const isPalindrom = str => str.split('').reverse().join('') === str;\n// let templateLine = `\n// Функція 1 (12345)=> ${getMaxDigit(12345)};<br>\n// Функція 3 (teTIana) => ${getCorectName('teTIana')};<br>\n// Функція 4 (1000) => ${sumWithoutTax(1000)};<br>\n// Функція 7 (2500UAH) => ${convertCurrency('2500UAH')}$;<br>\n// Функція 8 => ${getRandomPassword()};<br>\n// Функція 10 ()=> ${isPalindrom('madam')};<br>\n// `;\n// console.log(templateLine);\n// document.getElementById(\"div1\").innerHTML = templateLine;\n\n//# sourceURL=webpack:///./src/hw03.js?");

/***/ }),

/***/ "./src/hw04.js":
/*!*********************!*\
  !*** ./src/hw04.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var students = [\"Саша\", \"Игорь\", \"Лена\", \"Ира\", \"Алексей\", \"Светлана\"];\nvar themes = [\"Дифференциальные уравнения\", \"Теория автоматов\", \"Алгоритмы и структуры данных\"];\nvar marks = [4, 5, 5, 3, 4, 5];\n\nfunction makePairs(students) {\n  var boysStudents = [\"Саша\", \"Игорь\", \"Алексей\"];\n  var girlsStudents = [\"Лена\", \"Ира\", \"Светлана\"];\n  var pairsStudents = [];\n\n  for (var i = 0; i < Math.floor(students.length / 2); i++) {\n    pairsStudents[i] = [boysStudents[i], girlsStudents[i]];\n  }\n\n  return pairsStudents;\n}\n\nvar pairsStudents = makePairs(students);\nconsole.log('hw 04 - pairs students', pairsStudents); // function takeThemes(pairsStudents, themes) {\n//     let pairsHaveThemes = [];\n//     for(let i=0; i<pairsStudents.length; i++) {\n//         pairsHaveThemes [i] = [pairsStudents[i].join(\" и \"), themes[i]];\n//     } return pairsHaveThemes;\n// }\n// const pairsHaveThemes = takeThemes(pairsStudents, themes);\n// console.log(pairsHaveThemes);\n// function getMarksStudents(students, marks) {\n//     let studentsHaveMarks = [];\n//     for(let i=0; i<students.length; i++) {\n//         studentsHaveMarks [i] = [students[i], marks[i]];\n//     }return studentsHaveMarks;\n// }\n// const studentsHaveMarks = getMarksStudents(students, marks);\n// console.log(studentsHaveMarks);\n// function getRandomeMarks(pairsHaveThemes) {\n//     let pairsWithMarksForProject = [];\n//     for(let i=0; i<pairsStudents.length; i++) {\n//         pairsWithMarksForProject[i] = [pairsHaveThemes[i], Math.floor(((Math.random() * 5) + 1))].flat();\n//     }return pairsWithMarksForProject;\n// }\n// const pairsWithMarksForProject = getRandomeMarks(pairsHaveThemes);\n// console.log(pairsWithMarksForProject);\n// let templateLine = `\n// Пари студентів => ${pairsStudents};<br>\n// Пари студентів і теми проектів => ${pairsHaveThemes};<br>\n// Оцінки студентів => ${studentsHaveMarks};<br>\n// Пари з випадковими оцінками => ${pairsWithMarksForProject};<br>\n// `;\n// console.log(templateLine);\n// document.getElementById(\"div1\").innerHTML = templateLine;\n\n//# sourceURL=webpack:///./src/hw04.js?");

/***/ }),

/***/ "./src/hw05.js":
/*!*********************!*\
  !*** ./src/hw05.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function 1\nfunction getRandomArray(length, min, max) {\n  var arr = [];\n\n  for (var i = 0; i < length; i++) {\n    arr[i] = Math.floor(Math.random() * (max - min));\n  }\n\n  return arr;\n}\n\nconsole.log('hw 05 - random array', getRandomArray(15, 1, 100)); // // function 3\n// function getAverage(...numbers) {\n//     let arr = numbers.filter(item => (parseFloat(item) - parseInt(item)) === 0);\n//     return (arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/arr.length;\n// }\n// console.log('середнє арифметичне');\n// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\n// // function 5\n// function filterEvenNumbers(...numbers) {\n//     return numbers.filter(item => ((parseFloat(item) - parseInt(item)) === 0) && item % 2);\n// }\n// console.log('фільтр парних чисел');\n// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));\n// // function 6\n// function countPositiveNumbers(...numbers) {\n//     let arr = numbers.filter(item => (parseFloat(item) - parseInt(item)) === 0);\n//     return arr.reduce((sum, item) => {\n//         if(item>0){\n//             sum++\n//         }return sum;\n//     },0);\n// }\n// console.log('кількість чисел більше 0');\n// console.log(countPositiveNumbers(0, 4, -5, 5, -8,));\n// // function 7\n// function getDividedByFive(...numbers) {\n//     let arr = numbers.filter(item => (parseFloat(item) - parseInt(item)) === 0);\n//     return arr.filter(item => item % 5 === 0);\n// }\n// console.log('числа, які діляться на 5');\n// console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\n// // function 8\n// function replaceBadWords(string) {\n//     let badWords = ['shit', 'fuck'];\n//     let arr = string.split(' ');\n//     for (i=0; i<badWords.length; i++) {\n//         arr = arr.map((value) => {\n//             return value.replace(badWords[i], '*'.repeat(badWords[i].length));\n//         });\n//     }return arr.join(' ');\n// };\n// console.log('заміна поганих слів');\n// console.log(replaceBadWords(\"It's bullshit!\"));\n// let templateLine = `\n// Масив випадкових чисел (15, 1, 100) => ${getRandomArray(15, 1, 100)};<br>\n// Середнє арифметичне (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};<br>\n// Фільтр парних чисел (1, 2, 3, 4, 5, 6) => ${filterEvenNumbers(1, 2, 3, 4, 5, 6)};<br>\n// Кількість чисел більше 0 (0, 4, -5, 5, -8,) => ${countPositiveNumbers(0, 4, -5, 5, -8,)};<br>\n// Числа, які діляться на 5 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};<br>\n// Заміна поганих слів (\"It's bullshit!\") => ${replaceBadWords(\"It's bullshit!\")};<br>\n// `;\n// console.log(templateLine);\n// document.getElementById(\"div1\").innerHTML = templateLine;\n\n//# sourceURL=webpack:///./src/hw05.js?");

/***/ }),

/***/ "./src/hw06.js":
/*!*********************!*\
  !*** ./src/hw06.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}]; // function 1\n\nfunction getSubjects(student) {\n  var result = [];\n  result = Object.keys(student.subjects).map(function (value) {\n    if (value.includes('_')) {\n      value = value.replace('_', ' ');\n    }\n\n    ;\n    return value[0].toUpperCase() + value.slice(1);\n  });\n  return result;\n}\n\n;\nconsole.log('hw 06 - students subjects', getSubjects(students[0])); // // function 2\n// function getAverageMark(students) {\n//     let result = Object.values(students.subjects);\n//     let length = 0;\n//     let sum;\n//     result = result.map(value => {\n//         sum = 0;\n//         for (let i=0; i<value.length; i++){\n//             sum+=parseInt(value[i]);\n//         }\n//         length+=value.length;\n//         return sum;\n//     });\n//     sum = 0;\n//     for(let i=0; i<result.length; i++){\n//         sum+=result[i];\n//     }; return (sum/length).toFixed(2);\n// };\n// console.log(getAverageMark(students[0]));\n// // function 3\n// function getStudentInfo(students) {\n//     let result = [];\n//     let averageMark = getAverageMark(students);\n//     result.course = students.course;\n//     result.name = students.name;\n//     result.averageMark = averageMark;\n//     return result;\n// };\n// console.log(getStudentInfo(students[0]));\n// // function 4\n// const getStudentsNames = (students) => students.map(value => value.name).sort();\n// console.log(getStudentsNames(students));\n// // function 5\n// function getBestStudent(students) {\n//     let result = [];\n//     let max = 0;\n//     result.name = '';\n//     result.averageMark = max;\n//     let averageMark;\n//     for(let i=0; i<students.length; i++) {\n//         averageMark = getAverageMark(students[i]);\n//         if (parseFloat(averageMark) > parseFloat(max)) {\n//             max = averageMark;\n//             result.name = students[i].name;\n//         };\n//     }; return result.name;\n// };\n// console.log(getBestStudent(students));\n// // function 6\n// function calculateWordLetters(string) {\n//     let result = [];\n//     let newString = string.toLowerCase();\n//     for (let i=0; i<newString.length; i++){\n//         if(!Object.keys(result).includes(newString[i])){\n//             result[newString[i]] = 1;\n//         } else result[newString[i]]+=1;\n//     }; return result;\n// };\n// console.log(calculateWordLetters('тест'));\n// let templateLine = `\n// Список предметів для \"Tanya\" => ${getSubjects(students[0])};<br>\n// Середня оцінка по предметах для \"Tanya\" => ${getAverageMark(students[0])};<br>\n// Інформація про \"Tanya\" => ${getStudentInfo(students[0])};<br>\n// Імена студентів а алфавітному порядку => ${getStudentsNames(students)};<br>\n// Кращий студент за показником середньої оцінки => ${getBestStudent(students)};<br>\n// Скільки разів повторюються букви в слові 'тест'? => ${calculateWordLetters('тест')};<br>\n// `;\n// console.log(templateLine);\n// document.getElementById(\"div1\").innerHTML = templateLine;\n\n//# sourceURL=webpack:///./src/hw06.js?");

/***/ }),

/***/ "./src/hw07.js":
/*!*********************!*\
  !*** ./src/hw07.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nvar latvia = {\n  tax: 0.25,\n  middleSalary: 1586,\n  vacancies: 3921\n};\nvar litva = {\n  tax: 0.15,\n  middleSalary: 1509,\n  vacancies: 1114\n}; //function 1\n\nfunction getMyTaxes(salary) {\n  result = this.tax * salary;\n  return result;\n}\n\n;\nconsole.log('hw 07 - taxes in Ukraine', getMyTaxes.call(ukraine, 30000)); // //function 2\n// function getMiddleTaxes() {\n//     result = this.tax * this.middleSalary;\n//     return result;\n// };\n// console.log(getMiddleTaxes.call(ukraine));\n// //function 3\n// function getTotalTaxes() {\n//     result = this.tax * this.middleSalary * this.vacancies;\n//     return result;\n// };\n// console.log(getTotalTaxes.call(ukraine));\n// //function 4\n// function getMySalary() {\n//     let result = {};\n//     let randomSalary = Math.floor(Math.random() * (2000 - 1500) + 1500);\n//     result.salary = randomSalary;\n//     result.taxes = this.tax * randomSalary;\n//     result.profit = result.salary - result.taxes;\n//     return console.log(result);\n// }\n// let timeOut = setTimeout(function wait() {\n//     getMySalary.call(ukraine);\n//     timeOut = setTimeout(wait, 10000);\n// }, 10000);\n// let templateLine = `\n// Завдання 1 => ${getMyTaxes.call(ukraine, 30000)};<br>\n// Завдання 2 => ${getMiddleTaxes.call(ukraine)};<br>\n// Завдання 3 => ${getTotalTaxes.call(ukraine)};<br>\n// Завдання 4 => дивись console;<br>\n// `;\n// console.log(templateLine);\n// document.getElementById(\"div1\").innerHTML = templateLine;\n\n//# sourceURL=webpack:///./src/hw07.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hw01 = __webpack_require__(/*! ./hw01 */ \"./src/hw01.js\");\n\nvar hw03 = __webpack_require__(/*! ./hw03 */ \"./src/hw03.js\");\n\nvar hw04 = __webpack_require__(/*! ./hw04 */ \"./src/hw04.js\");\n\nvar hw05 = __webpack_require__(/*! ./hw05 */ \"./src/hw05.js\");\n\nvar hw06 = __webpack_require__(/*! ./hw06 */ \"./src/hw06.js\");\n\nvar hw07 = __webpack_require__(/*! ./hw07 */ \"./src/hw07.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });