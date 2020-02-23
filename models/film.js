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
    type: Sequelize.STRING,
    validate:{
      notEmpty: true
    }
  },
  year: {
    type: Sequelize.INTEGER,
    validate:{
      isInt: true,
      max: 2020,
      min: 1940
    }
  },
  budget: {
    type: Sequelize.INTEGER,
    validate:{
      isInt: true,
      min: 1000
    }
  },
  gross: {
    type: Sequelize.INTEGER
  }
}, {
  scopes:{
    lastFilms:{
      where:{
        year:{
          [Sequelize.Op.gt]: 2007
        }
      }
    }
  }
});
};
