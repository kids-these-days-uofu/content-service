module.exports = (sequelize, DataTypes) => {
    const Body = sequelize.define('Body', {
      body: DataTypes.TEXT('long'),
    });
    return Body;
  };