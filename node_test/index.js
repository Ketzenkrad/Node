//Подключение пакета Express в скрипт
const express = require('express');
//Подключим пакет, который будет заниматься парсингом body
const bodyParser = require('body-parser');
//Переменная приложения
const application = express();
//Вызовем у объекта метод ejs, который поможет нам шаблонизировать HTML
application.set('view engine', 'ejs');
//Обозначим express статическую папку
application.use(express.static('public'));
//Добавим функционал парсинга:
application.use(bodyParser.urlencoded({ extended: true }));
//Ответим пользователю через коллбэк
application.get('/', (req, res) => {
    //При запросе на корневой элемент рендерим индексный файл
    res.render('index');
});
//Обработаем POST запрос
application.post('/', (req, res) => {
    //Возвращаем с отрендеренными данными
    res.render('index');
    //Получим через константу из HTML:
    const { city } = req.body;
    //Посмотрим в консоли на результат:
    console.log('Result: ' + city);
});
//Слушаем приложение(порт и коллбэк)
application.listen(3000, () => {
    //Лог для консоли
    console.log('Server is started on localhost:3000/');
});