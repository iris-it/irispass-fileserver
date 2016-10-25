/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groups', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    realname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    organization_uuid: {
      type: DataTypes.CHAR(36),
      allowNull: true
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
    tableName: 'groups'
  });
};
