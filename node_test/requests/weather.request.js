//Подключаем библиотеку для запросов на API-адреса;
const rp = require('request-promise');
//Экспортирем конструкцию
module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Not a name of City.');
        return
    }
    console.log('City: ', city);
}