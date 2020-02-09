// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const information = sequelizeClient.define('information', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false
    },
    developername: {
      type: DataTypes.STRING,
      allowNull: false
    },
    producttype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    images: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (information as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return information;
}
