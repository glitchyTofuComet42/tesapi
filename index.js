const express = require('express');
const app = express();
const PORT = 8000;

//Middleware

app.use(express.json());

//Endpoint List
app.get('/', (req, res) => {
    res.send('Respon dari API Node.js!');
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Rina'},
        { id: 2, name: 'Lina'}
    ];
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

