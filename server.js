const debug = require('debug');
const log = debug('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path')
require('dotenv').config();

// Import Routes
const appartmentsRoute = require('./routes/appartments');

// Middlewares
app.use(helmet())
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/appartments', appartmentsRoute);

// Connect to DB
mongoose.set('debug', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, () => {
    log('connected to DB');
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(process.env.PORT || 3001);