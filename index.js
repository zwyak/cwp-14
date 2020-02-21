const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config)

setTimeout(()=>{

}, 3000);
