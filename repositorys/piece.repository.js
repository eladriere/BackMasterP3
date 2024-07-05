const {tablePiece} = require("../models/piece.model");
const {tablePieceComposition} = require("../models/pieceComposition.model")
const {where, DataTypes} = require("sequelize");

exports.getAllPieceWithRange = async function getAllPieceWithRange(offset, limit) {
    return await tablePiece.findAll({offset: offset, limit: limit});
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
    try {
        console.log("body", body);

        if (body.sousPiece && body.sousPiece.length > 0) {
            for (let sousPieceData of body.sousPiece) {
                const existingPiece = await tablePiece.findOne({where: {idPiece: sousPieceData.idPiece}});

                if (existingPiece) {
                    const pieceCreer = await tablePiece.create(body.piece);

                    if (pieceCreer) {
                        await tablePieceComposition.create({
                            idPieceCompose: pieceCreer.idPiece,
                            idPieceComposant: sousPieceData.idPiece,
                            quantite: sousPieceData.quantite
                        });
                    } else {
                        throw new Error('Failed to create piece');
                    }
                } else {
                    throw new Error(`Sous piece with id ${sousPieceData.idPiece} does not exist`);
                }
            }
        } else {
            const pieceCreer = await tablePiece.create(body.piece);
            if (!pieceCreer) {
                throw new Error('Failed to create piece without sous pieces');
            }
        }
        return {success: true, message: 'Piece created successfully'};
    } catch (error) {
        console.error('Error creating piece:', error);
        return {success: false, message: error.message};
    }
}
