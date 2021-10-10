const createProducts = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products", {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      amount: DataTypes.FLOAT,
    },
    {
      timestamps: false,
    }
  );
  Products.associate = (models) => {
    Products.belongsTo(models.Store, { foreignKey: "store_id", as: "store" });
  };
  return Products;
};

module.exports = createProducts;