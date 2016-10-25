/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizations', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_comp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siren_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siret_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tva_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ape_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
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
    owner_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    licence_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'licences',
        key: 'id'
      }
    }
  }, {
    tableName: 'organizations'
  });
};
