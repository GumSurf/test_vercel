const express = require('express');
require('dotenv').config();
const app = express()

const db = require("./models");
const worksRoutes = require('./routes/works.routes');
db.sequelize.sync().then(()=> console.log('db is ready'));
app.use('/api/works', worksRoutes);
module.exports = app;
