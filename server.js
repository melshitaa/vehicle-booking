const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
// Routes
app.use('/api/auth', authRoutes); // Semua rute auth akan dimulai dengan /api/auth
app.use('/api/vehicles', vehicleRoutes); // Semua rute vehicles akan dimulai dengan /api/vehicles

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});