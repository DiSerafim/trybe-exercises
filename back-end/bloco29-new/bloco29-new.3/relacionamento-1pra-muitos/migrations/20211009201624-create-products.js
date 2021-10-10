'use strict';

const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ProductsTable = queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { allowNull: false, type: Sequelize.STRING },
      description: { allowNull: false, type: Sequelize.STRING },
      amount: { allowNull: false, type: Sequelize.FLOAT },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Stores", key: "id" },
      },
    });
    return ProductsTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Products");
  }
};
