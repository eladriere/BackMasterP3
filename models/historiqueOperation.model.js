const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableHistoriqueOperation  = sequelize.define('HistoriqueOperation', {
    idHistoriqueOperation : {primaryKey: true, type: DataTypes.NUMBER, notNull: true},
    idPosteDeTravail : {type: DataTypes.NUMBER, notNull: true},
    idMachine : {type: DataTypes.STRING, notNull: true},
    dateOperation : {type : DataTypes.DATE, notNull: true},
    temps : {type : DataTypes.NUMBER, notNull: true},
    idPiece : {type : DataTypes.NUMBER, notNull: true}
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableHistoriqueOperation = tableHistoriqueOperation;