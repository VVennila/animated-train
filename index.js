const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Animated Train!');
});

app.get('/animate', (req, res) => {
    res.send('Animation started!');
});

app.get('/page/:id', (req, res) => {
    res.send(`Page ${req.params.id}`);
});

app.post('/train', (req, res) => {
    const { trainId, status } = req.body;
    res.send(`Train ${trainId} status is ${status}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
