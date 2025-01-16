const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const app = express();
const morgan = require('morgan');

// init middlewares

app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(compression());

// init routes
var data = [
    {
        name: 'John Doe',
        age: 30,
        city: 'New York'
    },
    {
        name: 'Alice',
        age: 25,
        city: 'London'
    },
    {
        name: 'Bob',
        age: 35,
        city: 'Paris'
    }
];
app.get('/', (req, res) => {
    res.send('Hello World! <input>');
});

app.get('/api/data', (req, res) => {
    
    console.log('data'); 
    res.json(data);
});

app.post('/api/data', (req, res) => {
    console.log('data');
    const newPerson = req.body;
    data.push(newPerson);
    res.status(201).json({ message: 'Đã thêm thành công!', data: newPerson });
});

// init database

require('./dbs/init.mongodb');
// handle errors

module.exports = app;
