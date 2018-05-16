ФУНКЦИИ

-------------Задание 1--------------

Обязателен ли "else" ?

Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос посредством вызова confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как - то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта ?

Ответ: Функции будут работать одинаково. В первом случае сразу происходит проверка - 
если возраст > 18, то возвращается true, если возраст другой - выполняется confirm.
Во втором случае функция изначально должна возвращать пользователю вопрос confirm, а в 
случае, если возраст больше 18, то значение true. На практике никаких отличий при 
использовании этих двух кодов не будет.

--------------Задание 2--------------

Перепишите функцию, используя оператор '?' или '||'

Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.Сделайте два варианта функции checkAge:

Используя оператор '?'
Используя оператор ||

  Ответ:  
  
  1 variant 

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
};

var age = prompt('Ваш возраст?'); if (checkAge(age)) {
  alert('Доступ разрешен');
} else {
  alert('В доступе отказано');
};

Если введенный пользователем возраст соответствует условию age > 18, то функция возвращает 
первое значение (true), если не соответствует - то второе (результат вызова confirm).

2 variant

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
};

var age = prompt('Ваш возраст?');
if (checkAge(age)) {
  alert('Доступ разрешен');
} else {
  alert('В доступе отказано');
};

Если age > 18, функция возвращает логическое значение true, если меньше или равно - то
функция возвращает результат вызова confirm (true или false). В дальнейшем, если функия возвращает 
значение true, то выполняется alert('Доступ разрешен'), если функция возвращает false, то
выполняется alert('В доступе отказано');

---------------Задание 3--------------

Задача «Hello World» для функций:)

Напишите функцию min(a, b), которая возвращает меньшее из чисел a, b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

Ответ: function min (a, b) {
  if (a > b) {
    return b;
  } else if (b > a){
    return a;
  } else {
    return a;
  };
};

Вариант с тернарным оператором: 

function min (a, b) {
  return (a < b) ? a : b;
};

--------------Задание 4----------------

  Напишите функцию pow(x, n), которая возвращает x в степени n.Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x, n).

Запустить демо

P.S.В этой задаче функция обязана поддерживать только натуральные значения n, т.е.целые от 1 и выше.

Ответ: function pow(x, n) {
  
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
};
pow(2, 4);

