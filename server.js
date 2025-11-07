const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/projekt-planer', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1); // Exit the process on failure
});

app.get('/', (req, res) => {
  res.send('Welcome to the Project Planner Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});