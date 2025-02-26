module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define("Sales", {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        product: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    return Sales;
};
