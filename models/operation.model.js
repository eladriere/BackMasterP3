const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableOperation = sequelize.define('Operation', {
    idOperation : {primaryKey: true, type: DataTypes.NUMBER, notNull: true},
    idPosteDeTravail : {type: DataTypes.NUMBER, notNull: true},
    idMachine : {type: DataTypes.NUMBER, notNull: true},
    tempsDeTravail : {type : DataTypes.NUMBER},
    nom : {type : DataTypes.STRING}
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableOperation = tableOperation;