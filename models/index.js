const Actor = require('./actor');
const Film = require('./film');
const Project = require('./project');

module.exports = (Sequelize, config) => {
  const sequelize = new Sequelize(config.database);

  const actors = Actor(Sequelize, sequelize);
  const films = Film(Sequelize, sequelize);
  const projects = Project(Sequelize, sequelize);

  actors.belongsToMany(films, {through: projects});
  films.belongsToMany(actors, {through: projects});

  sequelize.sync({force:true})
  .then((res) => {
    console.log(res);
  });

  return {
    actors,
    films,

    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};
