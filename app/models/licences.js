/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licences', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    users_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'licences'
  });
};
