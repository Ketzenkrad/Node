//Подключение пакета в скрипт
const express = require('express');
//Переменная приложения
const application = express();
//Слушаем приложение(порт и коллбэк)
application.listen(3000, () => {
    console.log('Server is started on localhost:3000/')
});
//Получение параметров через коллбэк
application.get('/', (req, res) => {
    res.end('Test message');
});