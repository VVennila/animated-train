const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // To parse JSON bodies

app.get('/', (req, res) => {
    console.log('Received request for /');
    res.send('Hello, Animated Train!');
});

app.get('/animate', (req, res) => {
    console.log('Received request for /animate');
    res.send('Animation started!');
});

app.get('/page/:id', (req, res) => {
    console.log(`Received request for /page/${req.params.id}`);
    res.send(`Page ${req.params.id}`);
});

app.post('/train', (req, res) => {
    console.log(`Received POST request for /train with data: ${JSON.stringify(req.body)}`);
    res.send(`Train ${req.body.trainId} status is ${req.body.status}`);
});

app.post('/train', (req, res) => {
    const { trainId, status } = req.body;
    res.send(`Train ${trainId} status is ${status}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
