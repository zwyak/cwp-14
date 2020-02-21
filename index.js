const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config)

setTimeout(()=>{
  //Bulk create
  db.films.bulkCreate([
  { title: 'Собачья жизнь', rating: '8.100', year: 2010, budget: 63000560, gross: 105000100 },
  { title: '8-жизней', rating: '9.100', year: 2013, budget: 23000560, gross: 201000100 },
  { title: 'Проклятие', rating: '4.014', year: 2000, budget: 10000, gross: 23000 }
  ]).then(() => {
    return db.films.findAll({raw:true});
  }).then(films => {
    console.log(films);
  })

  //Bulk update
}, 3000);
