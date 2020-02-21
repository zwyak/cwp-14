module.exports = (Sequelize, sequelize) => {
  return sequelize.define('actors', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    birth: {
      type: Sequelize.STRING
    },
    films: {
      type: Sequelize.INTEGER
    },
    liked: {
      type: Sequelize.INTEGER
    }
  });
};
