const express = require('express');
const app = express();
const cors = require('cors');
const pcRouter = require('./src/modules/PC_Builder/PC_Router');
/* middleware */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/* router handler  */
app.use('/builders', pcRouter);

module.exports = app;
