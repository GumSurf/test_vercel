const express = require('express');
const path = require('path');
const cors = require('cors')
require('dotenv').config();
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/images', express.static(path.join(__dirname, 'images')))

const db = require("./models");
db.sequelize.sync().then(()=> console.log('db is ready'));
module.exports = app;
