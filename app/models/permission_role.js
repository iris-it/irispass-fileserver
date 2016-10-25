/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permission_role', {
    permission_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permissions',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    tableName: 'permission_role'
  });
};
