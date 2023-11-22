// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.get('/', function (req, res) {
    res.render('calc', {
        name: 'calc',

        component: [],

        title: 'Calc',

        data: {

        },
    })
})
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
