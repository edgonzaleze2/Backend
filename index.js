const express = require('express');
const app = express();
const router = require('./src/routes');
require('dotenv').config();

app.use(express.json());
app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});