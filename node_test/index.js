//Тест;
//переменная текста
var text = `
    Hallo! It is a test .rb file
    with current date and time.
`;
//константа даты
const now_date = new Date().toLocaleString();
//Вывод current date
console.log(now_date);
//просто вывод рандомного числа
console.log(Math.random());

//Тест работы с файлами
//Подключение модуля
const fs = require('fs');
//создание файла
fs.writeFileSync('test.rb', now_date + text);

//считывание данных
const result = fs.readFileSync('test.rb', { encoding: 'utf-8' });
console.log(result);

console.log('Директория ' + __dirname + ' и файл ' + __filename);