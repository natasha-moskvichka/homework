import {multiply, subtract} from './calculator.js';
import add from './calculator.js';
// Файл 2 — main.js
// Импортируйте все функции из calculator.js.
// Используйте их для вычислений и выведите результат в консоль.
// Дополнительное задание (по желанию,не разбирали такое)
// Попробуйте сделать default export для одной функции, например, add, и импортировать её под любым именем в main.js.

const addSum = add(8, 3);

const subtractSum = subtract(10, 2);

const multiplySum = multiply(6, 4);
console.log(addSum, subtractSum, multiplySum)
