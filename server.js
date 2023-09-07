'use strict';
const express = require('express');
const app = express();
app.use(express.urlencoded())
app.use(express.json())

// Получим всех супергероев
app.get('/characters', (req, res) => {
    // res.send("Get all")
    res.json(character)
});

// Получим супергероя по id
app.get('/character/:id', (req, res) => {
    res.json(character[req.params.id - 1])
});

// Создать супергероя
app.post('/character', (req, res) => {
    character.push({'name': req.body.name, 'age': req.body.age})
    res.send(character[character.length - 1])
})

// Изменить супергероя
app.put('/character/:id', (req, res) => {
    for (const ageKey in req.body) {
        if (req.body.name !== undefined)
            character[req.params.id - 1].name = req.body.name;
        if (req.body.age !== undefined)
            character[req.params.id - 1].age = req.body.age;
    }
    res.send(character[req.params.id - 1])
})

// Удалить супергероя
app.delete('/character/:id', (req, res) => {
    character.splice(req.params.id - 1, 1)
    res.json({"status":true})
})



var character = [
    {
        name: 'qwe',
        age: 3
    },
    {
        name: 'Hello world',
        age: 12
    },
    {
        name: 'privet',
        age: 22
    },
]


const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server listen on ' + PORT)
});

