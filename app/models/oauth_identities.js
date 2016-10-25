/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_identities', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    provider_user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false
    },
    access_token: {
      type: DataTypes.TEXT,
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
    tableName: 'oauth_identities'
  });
};
