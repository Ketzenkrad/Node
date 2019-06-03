//Подключаем библиотеку для запросов на API-адреса;
const rp = require('request-promise');
//Экспортирем конструкцию
//Асинхронная функция
module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Not a name of City.');
        return
    }

    //Ключ нашего API
    const KEY = 'c46f408d6d5e97eed3a527103eb02025'
        //Переменна вызова к API
    const uri = 'https://api.openweathermap.org/data/2.5/weather'

    //console.log('City: ', city);
    //Объект конфигурации для запроса
    const options = {
            //Пишем просто uri, т.к. совпадает ключ и значение
            uri,
            //Объект query-search
            qs: {
                //id = ключу
                appid: KEY,
                //значение q - городу
                q: city,
                //Передаем параметры ед.измерений
                units: 'imperial'
            },
            //Для парсинга
            json: true
        }
        //Блок try/catch
    try {
        //Передадим запрос в функцию
        const data = await rp(options);
        //console.log(data);
        //Конвертируем в градусы по Цельсию
        const celsius = (data.main.temp - 32) * 5 / 9;
        //Возвратим объект погоды
        return {
            //берем из API-ответа
            //toFixed(0) - округляем
            weather: `${data.name}: ${celsius.toFixed(0)} C`,
            error: null
        }
    } catch (error) {
        //console.log(error);
        return {
            weather: null,
            error: error.error.message
        }
    }
}