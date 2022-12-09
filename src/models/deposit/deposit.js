'use strict';

const depositModel = (sequelize, DataTypes) => {
  const model = sequelize.define('Deposit', {
    typeof: {
      type: DataTypes.ENUM,
      values: ['cash', 'check', 'mobile', 'wire'],
      required: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      required: true,
    },
  });
  return model;
};

module.exports = depositModel;
