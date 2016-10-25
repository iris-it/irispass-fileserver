/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sub: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    preferred_username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    given_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    family_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resource_access: {
      type: DataTypes.STRING,
      allowNull: true
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remember_token: {
      type: DataTypes.STRING,
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
    role_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '3',
      references: {
        model: 'roles',
        key: 'id'
      }
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
    tableName: 'users'
  });
};
