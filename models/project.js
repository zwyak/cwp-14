module.exports = (Sequelize, sequelize) => {
  return sequelize.define('projects', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    filmId: {
      type: Sequelize.INTEGER
    },
    actorId: {
      type: Sequelize.INTEGER
    }
  },
  {
  hooks:{
    afterCreate: (project, options)=>{
      console.log('!!! Project was inserted !!!');
    }
  }
});
};
