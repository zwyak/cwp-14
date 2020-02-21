module.exports = (Sequelize, sequelize) => {
  return sequelize.define('films', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  budget: {
    type: Sequelize.INTEGER
  },
  gross: {
    type: Sequelize.INTEGER
  }  
  });
};
