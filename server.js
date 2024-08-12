const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/scrape', require('./routes/scraper'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
