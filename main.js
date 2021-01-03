'use strict';
// var arr = [6, 4, 3, 3, 1, 5, 12, 4, 1, 2, 7, 2, 1];
 
// /* console.log(arr); */
// // const getFirst = array => array[i]
// console.log(arr.filter((el) => el>3));
// const words = ['hello', 'WORLD', 'Whatever'];
// console.log(words.map(word => word.toUpperCase()));
// var arr = [1, 2, 3];
// var arr2 = [7,...arr, 5,7]; // like arr.slice()
// arr2.push(4);
// console.log(arr2);
//1.Как найти сумму всех четных чисел в массиве
// var arr1 = [1,2,3,4,-8,6,-10,0-11];
// const test = arr1.filter(el => el%2==0 && el>=0);
// function res(arr){
//   var sum = 0;
// for(var i=0;i<arr.length;i++){
//   sum +=arr[i];

// }
// console.log(sum);

// }
// res(test);
// 2.Дан массив ['a', 'b', 'c'].
//  Добавьте ему в конец элементы 1, 2, 3.
// var arr = ['a', 'b', 'c'];
// arr.push(1,2,3)
// console.log(arr);
// 3.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);
// 4.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// var arr1 = [1, 2, 3];
// arr1.reverse();
// console.log(arr1);
// 5.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = arr1.slice(-3);
// console.log(arr2);
// 6.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// var arr1 = [1, 2, 3, 4, 5];
// arr1.splice(1,2);
// console.log(arr1);
// 7.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = arr1.splice(1,3);
// console.log(arr2);
// 8.
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = arr1.splice(3, 0, 'a', 'b', 'c');
// console.log(arr1);
// 9. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// const test = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(test));
// 10 Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
// // slice(0)
// return arr.map(el => el);
// }

// var arr1 = arrayClone(vegetables);

// console.log(arr1);
// console.log(vegetables);
// 11.Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// var str1 = vegetables.join();
// var str2 = vegetables.toString();
// console.log(str1); // "Капуста, Репа, Редиска, Морковка"
// console.log(str2); // "Капуста, Репа, Редиска, Морковка"
// 12.Двоеточие между нечётными числами
// Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве
//  аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 
// 5:563:921:7.

// const num = prompt('Введите число', 55);

// function colonOdd (num) {
//   let str = num.toString();
// // console.log(str)
//   let res = [str[0]];
//   for(let i = 1; i<str.length; i++){
//     if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)){
//        res.push(':', str[i]);
//     }else{
//        res.push(str[i]);
//     }
//   }
//   return res.join('');
// }

// console.log(colonOdd(num)); // 5:5
// 13.Замена регистра символов
// Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].

// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

// function changeRegister (str) { 
// let test = str.toString();
// let result = [];
//  for (let i=0; i<test.length; i++){
//    if(test[i] == test[i].toUpperCase()){
//     result.push(test[i].toLowerCase())
//    }else if(test[i] == test[i].toLowerCase()){
//     result.push(test[i].toUpperCase())
//    }else {
//     result.push(test[i]);
//  } 
// }
//   return result.join('');
// }

// console.log(changeRegister(str)); // [кАжДыЙ оХоТнИк] 
//14. Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

// var arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
// function removeDuplicates(arr) {

// first method
// const res1 = new Set(arr);
// let answ = [...res1];
// return answ;

//second method
// let test =  arr.filter((item, index) => {
// return arr.indexOf(item) ==index;
// })
// return test;
// }
//third method
// let test = arr.reduce((pos, item) => {
//   return pos.includes(item) ? pos :[...pos, item]
// }, []);
// return test
// }
// console.log(removeDuplicates(arr));  // [php,css,script,html,java] 
// 15.Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.

// var array = [1,2,3,4,5,6,7,8,9];

//  function getFirst(array, n) {
//   if(n==null){
//    return array[0];
//   }else{
//     return  array.slice(0, n)

//   }
// };

// console.log(getFirst(array));    // 1
// console.log(getFirst(array, 4)); // 1,2,3,4
// console.log(getFirst(array,-3)); // 1,2,3,4,5,6 
// 16. Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// var arr3 = [];

// if(arr1.length>arr2.length){
//   var count = arr1.length;
// }else{
//   var count = arr2.length;
// }
// for(let i = 0;i<count;i++){
// if(arr1[i]===undefined){
//   arr1.push(0)
// }else{
//   if (arr2[i] === undefined) {
//     arr2.push(0);
// }
// }
// arr3.push(arr1[i] + arr2[i])

// }
// console.log(arr3); // [5,7,9,4,5]  
// 17
// function countIdentic(arr) {
// let copy = arr.slice(0),
//     result = [],
//     cur,
//     count = 0;
//     while(copy.length){
//       cur = copy.shift();
//       if(result.indexOf(cur) === -1){
//         result.push(cur);
//         if(copy.indexOf(cur) >=0){
//           count++;
//         }
//       }
//     }
//     return console.log(count);
// }

// countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) // 4
// countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3 
// 18.Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

// var arr1 = [1, [2,[3,[4]]]];
// var arr2 = [1, [2], [3, [[4]]],[5,6]];

// function expand(arr) {
//   var i = 0;
//   while(i< arr.length){
//    arr = arr.reduce(function(a,b) {
// return a.concat(b);
//     },[]);
//     i++;
//   }
//   return arr;
// }

// console.log(expand(arr1)); // 1,2,3,4
// console.log(expand(arr2)); // 1,2,3,4,5,6
// 19.Объединить два массива без дублирования элементов
// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.
// var array1 = [5, 2, 1, -10, 8];
// var array2 = [5, 2, 1, -9, 3, 7]; 

// var union = function(array1, array2) {
//   var arr = array1.concat(array2);
//   let test =  arr.filter((item, index) => {
//     return arr.indexOf(item) == index;
//     });
//     return test;
//     }

// console.log(union(array1, array2)); // [-10,8,5,2,1,-9,3,7] 
// 20.Разница между двумя массивами
// Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2 и наоборот.
// var arr1 = [1, 2, 'a'];
// var arr2 = [1, 2, 3, 4, 'b'];  

// function arrayDiff(arr1, arr2) {

//   var arr = arr1.filter(x => arr2.indexOf(x) == -1)
//   .concat(arr2.filter(x => arr1.indexOf(x) == -1));
//   return arr;

//     }


// document.writeln(arrayDiff(arr1, arr2)); // [a,3,4,b]
// 21. Сумма квадратов значений массива
// Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

// function sumOfSquares(arr) { 

//   return arr.reduce(function (prev, cur) {
//     return prev + cur * cur;
//     });
//   }

// document.writeln(sumOfSquares([1, 2, 3, 4, 5])); // 55
// Сумма и произведение значений массива
// Напишите код, который определяет сумму и произведение значений массива.

// var arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];
// var sum = arr.reduce((prev, cont) =>  prev + cont);
// var product = arr.reduce((prev, cont) =>  prev * cont);

// document.writeln(" Сумма : "+sum + "Произведение : " + product); /* Сумма : 45
//                                      Произведение : 362880 */
// // 22.Сортировка массива объектов
// // Напишите код, который отсортирует массив объектов litmir по значению свойства title.

// var litmir = [ 
//    { author: 'Хэленка', title: 'Улетела сказка'},
//    { author: 'Коул Кресли', title: 'Восстание Аркан'},
//    { author: 'Райчел Мид', title: 'Золотая лилия'}
//    ];

// function test(a, b){
//   if(a.title < b.title){
//     return -1;
//   }else if(a.title > b.title){
//     return 1
//   }else{
//     return 0
//   }
// }
// litmir.sort(test);
// for(let i = 0; i< litmir.length; i++){
//   console.log(litmir[i].title)
// }
// // Восстание Аркан Золотая лилия Улетела сказка 
// 23.Найти все значения данного свойства в массиве объектов
// Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов и имя свойства, а затем возвращает все значения данного свойства из массива объектов.

// var litmir = [ 
//    { author: 'Хэленка', title: 'Улетела сказка'},
//    { author: 'Коул Кресли', title: 'Восстание Аркан'},
//    { author: 'Райчел Мид', title: 'Золотая лилия'}
//    ];

// function propertyValue(array, key) {
//   return  array.map(el => el[key]);
//   }

// console.log(propertyValue(litmir, 'title'));  // Улетела сказка,Восстание Аркан,Золотая лилия
// console.log(propertyValue(litmir, 'author')); // Хэленка,Коул Кресли,Райчел Мид 
// 24.Общая стартовая подстрока в массиве строк
// Напишите функцию startingSubstring(arr), которая возвращает общую начальную подстроку в массиве строк.

// var arr1 = ['Капуста', 'Капитал'];
// var arr2 = ['Репа', 'Редиска'];
// function startingSubstring(arr) {
//   let result = '';
// const str1 = arr[0];
// const str2 = arr[1];
// for(let i = 0; i < str1.length;i++){
//   while(str1[i] === str2[i]){
//      result += str1[i];
//     break
//   }
// }
// return result;
// // console.log(str1);
// // console.log(str2);

// }

// var res1 = startingSubstring(arr1);
// var res2 = startingSubstring(arr2);

// document.writeln(res1); // Кап
// document.writeln(res2); // Ре
// 25.Удалить определенный элемент из массива
// Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.

// function removeItem(arr, num) {
// var test = [];
// for(let i=0;i<arr.length;i++){
//   if(arr[i] !== num){
//     test.push(arr[i]);
//   }
// }
// return test;
// }

// document.writeln(removeItem([3, 5, 7, 8, 5], 5)); // [3,7,8] 
// 25. Вернуть случайный элемент из массива
// Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива.

// function randomElement(arr) {

// let test =  arr[Math.floor(Math.random()*arr.length)];
// return test;
// }

// var arr = [24, 45, 22, 35, 43];
// document.writeln(randomElement(arr)); // 22
// 26. Массив с заданным количеством элементов
// Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.

// function arrayFilled(len, value) {
// let  array = [];
// for(len; len>0;len--){
//   array.push(value)
// }
// return array;
// }

// console.log(arrayFilled(5, 1));   // [1,1,1,1,1]
// console.log(arrayFilled(4, 12));  // [12,12,12,12] 
// 27. Переместить элемент массива из одной позиции в другую
// Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.

// function moveElement(arr,from,to) {
// // console.log(test);
// arr.splice(to, 0, arr.splice(from,1)[0]);
// return arr;
// }

// var arr = [ 'a', 'b', 'c', 'd', 'e'];
// console.log(moveElement(arr,3,1)); // ["a", "d", "b", "c", "e"]
// 30. Массив длин строковых элементов
// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// var vegetableLength = vegetables.map(el => el.length);

// alert( vegetableLength ); // 7,4,7,8
// 31Массив сумм чисел
// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// var numbers = [2, 3, 5, 7, 11, 13, 17];
// function currentSums(numbers){
//   let test = [];
//   numbers.reduce(function(a,b,i) {
//     return test[i] = a+b;
//   }, 0);
//   return test;
// }

// console.log(currentSums(numbers)); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]
// 33. Массив из первых букв
// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str. При написании данного кода, позаимствуйте у объека Array метод filter.

// var str = "Каждый охотник желает знать, где сидит фазан."; 

// function firstCgar(value, index, arr){
//   if(index == 0){
//     return true
//   }
//   return arr[index -1]===' ';
// }
// var array = [].filter.call(str, firstCgar);
// document.write(array);  // [К,о,ж,з,г,с,ф]
// 34 34. Массив строк по три символа
// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. При написании данного кода, позаимствуйте у объека Array метод map.
// var str = "JavaScript"; 

// function test(value, index, str){
//  return str.substring(index - 1, index + 2);
// }
// var arr = Array.prototype.map.call(str, test);
// document.writeln(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 
// 35
// var numerics = [5, 7, 2, 9, 3, 1, 8];

// function test(first, second){
//   return second - first;
// }
// numerics.sort(test);
// document.writeln(numerics); // [9,8,7,5,3,2,1] 