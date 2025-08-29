//Глава 1
function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = low + high;
    const guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return undefined;
}

const myList = [1, 3, 5, 7, 9];

console.log(binary_search(myList, 3));
console.log(binary_search(myList, -1));

//Упражнение 1.1 Ответ 7
//Упражнение 1.2 Ответ 8 прибавится еще один
//Упражнение 1.3 Ответ log n
//Упражнение 1.4 Ответ n
//Упражнение 1.5 Ответ n
//Упражнение 1.6 Ответ n

//ГЛАВА 2
//Упражнение 2.1 Ответ списки
//Упражнение 2.2 Ответ массива
//Упражнение 2.3 Ответ вставка имеет n скорость выполнения, нужно всех прошлых проходить, чтобы вставить нового пользователя

function find_smallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const smallest = find_smallest(arr);
    newArr.push(arr.pop(smallest));
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));

//Глава 3
//Упражнение 3.2 Стек растет бесконечно, тем самым забивая память.

//Глава 4

//Упражнение 4.1
function sum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
}

console.log(sum([1, 2, 3, 4]));

//Упражнение 4.3

function max_number(array) {
  if (array.length === 2) {
    array[0] > array[1] ? array[0] : array[1];
  }
  const sub_max = max_number(array.slice(1));
  return array[0] > first ? array[0] : sub_max;
}

//Упражнение 4.4 Один элемент или ноль элементов в массиве - базовый случай

//Упражнение 4.5 O(n)
//Упражнение 4.6 O(n)
//Упражнение 4.7 O(1)
//Упражнение 4.8 O(n^2)

//Глава 5
//Упражнение 5.1 Последовательная
//Упражнение 5.2 Не последовательная
//Упражнение 5.3 Не последовательная
//Упражнение 5.4 Последовательная
//Упражнение 5.5 C D
//Упражнение 5.6 B D
//Упражнение 5.7 B C

//Глава 6
//6.1 2
//6.2 2
//6.3 A-недействителен B-действителен C-недействителен
//6.4 Проснуться -> Сделать зарядку -> Принять душ -> Одеться -> Почистить зубы -> Позавтракать -> Упаковать обед
//6.5 A C

//Глава 7

//7.1   А-8 Б-60 С-4

//Глава 8
