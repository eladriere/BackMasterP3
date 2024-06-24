const {tablePiece} = require('./piece.model');
const {tablePieceComposition} = require('./pieceComposition.model');

// Define unique aliases for each association
tablePiece.belongsToMany(tablePiece, { as: 'Children', through: tablePieceComposition, foreignKey: 'idPieceCompose', otherKey: 'idPieceComposant' });
tablePiece.belongsToMany(tablePiece, { as: 'Parents', through: tablePieceComposition, foreignKey: 'idPieceComposant', otherKey: 'idPieceCompose' });

module.exports = { tablePiece, tablePieceComposition };
