const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tablePosteDeTravail = sequelize.define('PosteDeTravail', {
        idPosteDeTravail: {primaryKey: true, type: DataTypes.INTEGER, notNull: true, autoIncrement: true},
        idOuvrierActuelle: {type: DataTypes.STRING, notNull: true},

    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tablePosteDeTravail = tablePosteDeTravail;