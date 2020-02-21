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
    liked: {
      type: Sequelize.INTEGER
    }
  });
};
