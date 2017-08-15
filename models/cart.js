module.exports = function(sequelize, DataTypes){

    var Product = sequelize.define('Product', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        product: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate:{
                min: 0
            }
        }
    });
    
    Cart.associate = function(models) {

    Cart.belongsToMany(models.Product, {
      through: 'ProductCart',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }  

  return Cart;

}