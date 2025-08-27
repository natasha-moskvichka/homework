//Домашнее задание: Модуль “Калькулятор”
// Описание задачи
// Нужно создать два файла: calculator.js и main.js. В первом файле будут функции калькулятора, во втором — импорт этих функций и их использование.
// Файл 1 — calculator.js
// Создайте три функции:
// add(a, b) — возвращает сумму a + b
// subtract(a, b) — возвращает разность a - b
// multiply(a, b) — возвращает произведение a * b
// Экспортируйте эти функции так, чтобы их можно было импортировать в другом файле.

export default function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

export  { multiply, subtract };
