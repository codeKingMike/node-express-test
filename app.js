const express = require('express');

const app = express();
const mongoose = require('mongoose');

// ROUTES
app.get('/', (req, res) => {
    res.send('We are home');
});

app.get('/posts', (req, res) => {
    res.send('We are posts');
});


// Connect to DB
mongoose.connect('mongodb+srv://jakesmith21310:Helloworld44@cluster0.qkyk6.mongodb.net/test-db?retryWrites=true&w=majority', () => console.log('connected to DB!'))

app.listen(3000);