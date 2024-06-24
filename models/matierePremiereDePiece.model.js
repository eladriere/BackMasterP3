const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableMatierePremiereDePiece = sequelize.define('MatieresPremieresDePieces', {
    idMatierePremiereDePiece : {primaryKey: true, type: DataTypes.NUMBER, notNull: true},
    idMatiere : {type: DataTypes.NUMBER, notNull: true},
    idPiece : {type: DataTypes.NUMBER, notNull: true},
},
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableMatierePremiereDePiece = tableMatierePremiereDePiece;