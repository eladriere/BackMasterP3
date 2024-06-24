const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableGammeDeFabrication  = sequelize.define('GammeDeFabrication', {
    idGammeDeFabrication : {primaryKey: true, type: DataTypes.NUMBER, notNull: true},
    idOperation : {type: DataTypes.NUMBER, notNull: true},
    idResponsable : {type: DataTypes.STRING, notNull: true},
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableGammeDeFabrication = tableGammeDeFabrication;