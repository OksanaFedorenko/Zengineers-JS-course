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

P.S.В этой задаче функция обязана поддерживать только натуральные значения n, т.е.целые от 1 и выше.

Ответ: function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  };

pow(2, 4);

ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

-------------Задание 1--------------

  Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к.sumTo(n) = n + sumTo(n - 1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { /*... ваш код ... */ }

alert(sumTo(100)); // 5050
Какой вариант решения самый быстрый ? Самый медленный ? Почему ?

  Можно ли при помощи рекурсии посчитать sumTo(100000) ? Если нет, то почему ?

  Ответ: 
  
  1. function sumTo (n) {
    if (n > 1) {
    return n + sumTo (n - 1);
    } else return 1;
  };

alert(sumTo(100));

2. function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(100));

3. function sumTo(n) {
  return n * (n + 1) / 2;
}

alert(sumTo(100));

Самый быстрый способ посчитать сумму чисел от 1 до n - использовать формулу для суммы
арифметической прогрессии - здесь нужно выполнить только 3 арифметические операции.
Второй по скорости способ - цикл. Хотя он использует n-ное количество сложений, но меньше 
задействует памяти по сравнению с рекурсией. Самый медленный способ - рекурсия, требуется 
больше памяти и вычислительных мощностей для выполнения всех вложенных вызовов функций.
Вычислить sumTo(100000) с помощью рекурсии невозможно, потому что максимально возможная глубина
рекурсии (количество вложенных вызовов и контекстов выполнения) составляет 10000, в некоторых
 интерпретаторах немного больше.

 ------------Задание 2-----------==

Вычислить факториал

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...* 1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает факториал числа n! , используя рекурсивный вызов.

  alert(factorial(5)); // 120
Подсказка: обратите внимание, что n! можно записать как n * (n - 1)!.Например: 3! = 3 * 2! = 3 * 2 * 1! = 6

Ответ: function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  } else return 1;
};

alert(factorial(100));

---------------Задание 3-------------

Числа Фибоначчи

Последовательность чисел Фибоначчи имеет формулу Fn = Fn - 1 + Fn - 2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1 + 1), затем 3(1 + 2), 5(2 + 3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Напишите функцию fib(n), которая возвращает n - е число Фибоначчи.Пример работы:

function fib(n) { /* ваш код */ }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
Все запуски функций из примера выше должны срабатывать быстро.

  Ответ: function fib(n) {
    if (n > 1) {
      return fib(n - 1) + fib (n - 2);
    } else return n;
  }
  fib(7);

  или с помощью цикла

function fib(n) {
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b, b = c;
  } 
  return b;
};
fib(77);

  ИМЕНОВАННЫЕ ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

  ----------Задание 1------------

  Каков будет результат выполнения кода ?

    function g() { return 1; }

alert(g);
А такого ? Будет ли разница, если да – почему ?

  (function g() { return 1; });

alert(g);

Ответ: Первый код выведет во всплывающем окне код самой функции g. Поскольку функция
объявлена через Function Declaration, то её имя видно в глобальной области видимости.
Второй код в скобках, значит является частью именованного функц. выражения, и имя этой функции 
может быть вызвано только изнутри самой функции.