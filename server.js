const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Datenbankverbindung
mongoose.connect('mongodb://localhost:27017/projekt-planer', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Datenbank verbunden');
}).catch(err => {
  console.error('Datenbankverbindung fehlgeschlagen:', err);
  process.exit(1); // Exit the process on failure
});

app.get('/', (req, res) => {
  res.send('Willkommen zum Projekt Planer Backend!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port: ${PORT}`);
});