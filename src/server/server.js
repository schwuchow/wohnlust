const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const appartmentsRoute = require('./routes/appartments');

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/appartments', appartmentsRoute);
// app.use('/api/user', authRoute);

// Connect to DB
mongoose.set('debug', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to DB');
});

app.listen(3001);