const { DataTypes } = require("sequelize");
const { sequelize } = require("../sql/postgresql.db");

const tablePieceComposition = sequelize.define('PieceComposition', {
    idPieceComposition: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
    idPieceComposant: { type: DataTypes.INTEGER, allowNull: false },
    idPieceCompose: { type: DataTypes.INTEGER, allowNull: false },
    quantite: {type : DataTypes.INTEGER, allowNull: false},
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

exports.tablePieceComposition = tablePieceComposition;
