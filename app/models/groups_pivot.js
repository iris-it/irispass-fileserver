/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groups_pivot', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'groups',
        key: 'id'
      }
    }
  }, {
    tableName: 'groups_pivot'
  });
};
