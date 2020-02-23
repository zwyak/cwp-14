const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config)

setTimeout(()=>{
  //1 - Bulk create - films
  db.films.bulkCreate([
  { title: 'Собачья жизнь', rating: '8.100', year: 2010, budget: 63000560, gross: 105000100 },
  { title: '8-жизней', rating: '9.100', year: 2013, budget: 23000560, gross: 201000100 },
  { title: 'Проклятие', rating: '4.014', year: 2000, budget: 10000, gross: 23000 },
  { title: 'Миссия невыполнима', rating: '6.014', year: 2005, budget: 100000, gross: 2300000 }
  ]).then(() => {
    return db.films.findAll({raw:true});
  }).then(films => {
    console.log(films);
  })

  //Bulk create - actors
  db.actors.bulkCreate([
  { name: 'Peter Griffin', birth: '1960-10-11', liked: 14689},
  { name: 'Lois Griffin', birth: '1965-02-24', liked: 12152},
  { name: 'Chris Griffin', birth: '1990-01-01', liked: 5600},
  { name: 'Meg Griffin', birth: '1989-12-30', liked: 1},
  ]).then(() => {
    return db.actors.findAll({raw:true});
  }).then(actors => {
    console.log(actors);
  })

  //Create projects
  //1
  db.films.findByPk(1)
  .then(film=>{
    if(!film) return;

    db.actors.findByPk(1)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });

    db.actors.findByPk(2)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });

    db.actors.findByPk(3)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });

    db.actors.findByPk(4)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });
  });
  //2
  db.films.findByPk(2)
  .then(film=>{
    if(!film) return;

    db.actors.findByPk(1)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });

    db.actors.findByPk(3)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });

    db.actors.findByPk(4)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });
  });
  //3
  db.films.findByPk(3)
  .then(film=>{
    if(!film) return;

    db.actors.findByPk(1)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });

    db.actors.findByPk(4)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });
  });

  //3
  db.films.findByPk(4)
  .then(film=>{
    if(!film) return;

    db.actors.findByPk(2)
        .then(actor=>{
            if(!actor) return;
            film.addActor(actor);
    });
  });
}, 3000);

setTimeout(() =>{
  //2 - Bulk update
  db.sequelize.query("SELECT actorId, count(*) FROM `projects` group by actorId having count(*) = 3",
                  { type: db.sequelize.QueryTypes.SELECT})
  .then(actors => {
    actors.forEach((item, i) => {
      db.actors.update(
        { liked: 0 },
        { where: { id: item.actorId }}
      ).then(() =>{
        console.log('Actor was updated!');
      }).catch((err) =>{
        console.error("Actor wasn't updated");
      })
    });
  })
  .then(() =>{
    db.actors.findAll({raw:true})
    .then(actors =>{
      console.log(actors);
    });
  });

  // 4 - Use include
  db.films.findAll({
    include: [{
        model: db.actors
    }]
  , raw: true}).then(res =>{
    console.log('Films and Actors:');
    console.log(res);
  });

}, 4000);

setTimeout(() =>{
  //3 - Bulk delete
  db.actors.destroy({
    where:{
      liked: 0
    }
  }).then(() =>{
    db.actors.findAll({raw:true})
    .then(actors =>{
      console.log(actors);
    });
  });
}, 5000);
