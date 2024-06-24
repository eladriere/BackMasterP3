const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableMachine  = sequelize.define('Machine', {
    idMachine : {primaryKey: true, type: DataTypes.NUMBER, notNull: true},
    idPosteDeTravailMachine : {type: DataTypes.NUMBER, notNull: true},
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableMachine = tableMachine;