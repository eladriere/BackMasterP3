const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tablePosteDeTravailMachine = sequelize.define('PosteDeTravailMachine', {
        idPosteDeTravailMachine: {primaryKey: true, type: DataTypes.INTEGER, notNull: true, autoIncrement: true},
        idPosteDeTravail: {type: DataTypes.NUMBER, notNull: true},
        idMachine : {type : DataTypes.NUMBER, notNull : true},
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tablePosteDeTravailMachine = tablePosteDeTravailMachine;