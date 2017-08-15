module.exports = function(sequelize, DataTypes){

    var Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        cost: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate:{
                min: 0
            }            
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 0
            }
        }
    });
    
    Product.associate = function(models) {

    Product.belongsToMany(models.Cart, {
      through: 'ProductCart',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }  

  return Product;

}