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
    const id = parseInt(req.params.id);
    const char = character.find(c => c.id === id);
    
    if (!char) {
        return res.status(404).json({ error: 'Character not found' });
    }
    
    res.json(char);
});

// Создать супергероя
app.post('/character', (req, res) => {
    if (!req.body.name || !req.body.age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }
    
    const newCharacter = {
        id: character.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age)
    };
    
    character.push(newCharacter);
    res.status(201).json(newCharacter);
});

// Изменить супергероя
app.put('/character/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const charIndex = character.findIndex(c => c.id === id);
    
    if (charIndex === -1) {
        return res.status(404).json({ error: 'Character not found' });
    }
    
    if (req.body.name) {
        character[charIndex].name = req.body.name;
    }
    if (req.body.age) {
        character[charIndex].age = parseInt(req.body.age);
    }
    
    res.json(character[charIndex]);
});

// Удалить супергероя
app.delete('/character/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const charIndex = character.findIndex(c => c.id === id);
    
    if (charIndex === -1) {
        return res.status(404).json({ error: 'Character not found' });
    }
    
    character.splice(charIndex, 1);
    res.json({ status: true, message: 'Character deleted successfully' });
});

var character = [
    {
        id: 1,
        name: 'qwe',
        age: 3
    },
    {
        id: 2,
        name: 'Hello world',
        age: 12
    },
    {
        id: 3,
        name: 'privet',
        age: 22
    },
]

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server listen on ' + PORT)
});
