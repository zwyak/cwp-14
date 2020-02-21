const Actor = require('./turtle');
const Film = require('./weapon');

module.exports = (Sequelize, config) => {
  const sequelize = new Sequelize(config.database);

  const actors = Actor(Sequelize, sequelize);
  const films = Film(Sequelize, sequelize);

  films.hasMany(actors);

  sequelize.sync({force:true})
  .then((res) => {
    console.log(res);
  });

  return {
    actors,
    films

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};
