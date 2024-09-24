const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a tu servidor Express!');
});

app.get('/api', (req, res) => {
    res.send({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
