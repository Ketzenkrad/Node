//Подключение пакета Express в скрипт
const express = require('express');
//Переменная приложения
const application = express();
//Вызовем у объекта метод ejs, который поможет нам шаблонизировать HTML
application.set('view engine', 'ejs');
//Обозначим express статическую папку
application.use(express.static('public'));
//Ответим пользователю через коллбэк
application.get('/', (req, res) => {
    //При запросе на корневой элемент рендерим индексный файл
    res.render('index');
});
//Слушаем приложение(порт и коллбэк)
application.listen(3000, () => {
    //Лог для консоли
    console.log('Server is started on localhost:3000/');
});