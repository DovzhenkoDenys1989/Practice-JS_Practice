"use strict";

//1.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

//2.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const array4 = [1, 2, 3];
console.log(array4.reverse());

//3.Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const array5 = [1, 2, 3];
array5.push(4, 5, 6);
console.log(array5);

//4.Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const array6 = [1, 2, 3];
array6.unshift(4, 5, 6);
console.log(array6);

//5.Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
const array7 = ["js", "css", "jq"];
console.log(array7.shift());
console.log(array7);

//6.Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
const array8 = ["js", "css", "jq"];
console.log(array8.pop());
console.log(array8);

//7.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const array9 = [1, 2, 3, 4, 5];
const array10 = array9.slice(0, 3);
console.log(array10);

//8.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const array11 = [1, 2, 3, 4, 5];
const array12 = array11.slice(3, 5);
console.log(array12);

//9.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const array13 = [1, 2, 3, 4, 5];
array13.splice(1, 2);
console.log(array13);

//10.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const array14 = [1, 2, 3, 4, 5];
const array15 = array14.splice(1, 3);
console.log(array15);

//11.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const array16 = [1, 2, 3, 4, 5];
array16.splice(3, 0, "a", "b", "c");
console.log(array16);

//12.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const array17 = [1, 2, 3, 4, 5];
array17.splice(1, 0, "a", "b");
array17.splice(6, 0, "c");
array17.splice(8, 0, "e");
console.log(array17);

//13.Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const array18 = [3, 4, 1, 2, 7];
array18.sort();
console.log(array18);

//14.Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const array19 = { js: "test", jq: "hello", css: "world" };
console.log(Object.keys(array19));

//----------

//1.* необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку,
//и возвращать true, если строка есть в массиве, и false - если нет

const arrElem = ["a", "b", "c", "d", "e"];

function hasElem(arrElem, value) {
  for (let i = 0; i < arrElem.length; i++) {
    if (arrElem[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(hasElem(arrElem, "a"));

/*function sameValue(arrayValue, String) {
  for (let i = 0; i < arrayValue.length; ++i) {
    if (arrayValue[i] === isNaN) {
      return true;
    }
  }

  return false;
}
console.log(sameValue([3, 1, 1, 12]));*/

//2.Дан массив с числами. Проверьте, что в этом массиве есть указанное число.
//Если есть - вернуть true, а если нет - вернуть false.
const arrayNum = [8, 2, 3, 4, 6];

function contains(arr, elem) {
  return arr.indexOf(elem) != -1;
}

console.log(contains(arrayNum, 2));

//3.Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
//Если есть -  вернуть true, а если нет - вернуть false.
function sameNumber(arrayTwoNum) {
  for (let i = 0; i < arrayTwoNum.length; ++i) {
    if (arrayTwoNum[i] === arrayTwoNum[i - 1]) {
      return true;
    }
  }
  return false;
}
console.log(sameNumber([3, 1, 1, 12]));

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

//Дан массив arr. Найдите среднее арифметическое его элементов.
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let result = sum / arr.length;
console.log(result);
