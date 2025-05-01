const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { sequelize } = require('./models');

// Hanya deklarasikan sekali
const divisiRoutes = require('./routes/divisi');
const prokerRoutes = require('./routes/proker');

app.use(bodyParser.json());

app.use('/divisi', divisiRoutes);
app.use('/proker', prokerRoutes);

app.listen(3000, async () => {
  await sequelize.authenticate();
  console.log('Server running on http://localhost:3000');
});
