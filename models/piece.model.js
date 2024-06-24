const { DataTypes } = require("sequelize");
const { sequelize } = require("../sql/postgresql.db");

const tablePiece = sequelize.define('Pieces', {
    idPiece: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false, unique: true },
    livrable: { type: DataTypes.BOOLEAN, allowNull: false },
    quantite: { type: DataTypes.INTEGER, allowNull: false },
    intermediaire: { type: DataTypes.BOOLEAN, allowNull: false },
    acheteExterieur: { type: DataTypes.BOOLEAN, allowNull: false },
    idMatierePremiereDePiece: { type: DataTypes.INTEGER, allowNull: true },
    idGammeDeFabrication: { type: DataTypes.INTEGER, allowNull: false },
    prix: { type: DataTypes.DECIMAL, allowNull: false },
    libelle: { type: DataTypes.STRING, allowNull: true },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

exports.tablePiece = tablePiece;
