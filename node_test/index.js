//Подключение пакета Express в скрипт
const express = require('express');
//Подключим пакет, который будет заниматься парсингом body
const bodyParser = require('body-parser');
//Импортируем модуль
const weatherRequest = require('./requests/weather.request.js');
//Константа приложения
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
application.post('/', async(req, res) => {
    //Получим через константу из HTML:
    const { city } = req.body;
    //Посмотрим в консоли на результат:
    console.log('Result: ' + city);
    //Вызовем функцию WeatherRequest и передаем туда город
    //Деструктуризация объекта на погоду и ошибку + асинхронность для функции
    const { weather, error } = await weatherRequest(city);
    //Консольные логи для погоды и ошибки
    console.log('Weather ', weather);
    console.log('Error ', error);
    //Возвращаем с отрендеренными данными
    res.render('index');
});
//Слушаем приложение(порт и коллбэк)
application.listen(3000, () => {
    //Лог для консоли
    console.log('Server is started on localhost:3000/');
});

//API-ключ с OpenWeatherMap
//c46f408d6d5e97eed3a527103eb02025