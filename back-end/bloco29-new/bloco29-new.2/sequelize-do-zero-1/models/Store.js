const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define (
    "Store",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return Store;
};

module.exports = Store;