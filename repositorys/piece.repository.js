const {tablePiece} = require("../models/piece.model");
const {tablePieceComposition} = require("../models/pieceComposition.model")
const {where, DataTypes} = require("sequelize");

exports.getAllPieceWithRange = async function getAllPieceWithRange(offset, limit) {
    return await tablePiece.findAll({ offset: offset, limit: limit });
}

exports.getPieceById = async function getPieceById(idPiece) {
    if (idPiece !== undefined) {
        return await tablePiece.findOne({where: {idPiece: idPiece}})
    }
}

exports.getPieceByNom = async function getPieceByNom(nomPiece) {
    if (nomPiece !== undefined) {
        return await tablePiece.findOne({where: {nom: nomPiece}})
    }
}

exports.createPiece = async function createPiece(body) {
    console.log("body", body)
    let pieceCreer = await tablePiece.create(body.piece)
    if (pieceCreer) {
        if (body.sousPiece && body.sousPiece.length > 0) {
            for (let sousPieceData of body.sousPiece) {
                await tablePieceComposition.create({
                    idPieceCompose : pieceCreer.idPiece,
                    idPieceComposant: sousPieceData.idPiece,
                    quantite : sousPieceData.quantite
                })
            }
        }

    }
}
