/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('websites', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    organization_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'organizations',
        key: 'id'
      }
    }
  }, {
    tableName: 'websites'
  });
};
