const { tableMatierePremiereDePiece } = require('../models/matieresPremieresDePieces.model');

// Fonction pour obtenir toutes les matières premières de pièces
async function getAllMatieresPremieresDePieces() {
    try {
        const matieresPremieresDePieces = await tableMatierePremiereDePiece.findAll();
        return matieresPremieresDePieces;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir une matière première de pièce par ID
async function getMatierePremiereDePieceById(id) {
    try {
        const matierePremiereDePiece = await tableMatierePremiereDePiece.findByPk(id);
        return matierePremiereDePiece;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer une nouvelle matière première de pièce
async function createMatierePremiereDePiece(matierePremiereDePieceData) {
    try {
        const newMatierePremiereDePiece = await tableMatierePremiereDePiece.create(matierePremiereDePieceData);
        return newMatierePremiereDePiece;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour une matière première de pièce
async function updateMatierePremiereDePiece(id, matierePremiereDePieceData) {
    try {
        const updatedMatierePremiereDePiece = await tableMatierePremiereDePiece.update(matierePremiereDePieceData, {
            where: { idMatierePremiereDePiece: id }
        });
        return updatedMatierePremiereDePiece;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer une matière première de pièce
async function deleteMatierePremiereDePiece(id) {
    try {
        const result = await tableMatierePremiereDePiece.destroy({
            where: { idMatierePremiereDePiece: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllMatieresPremieresDePieces,
    getMatierePremiereDePieceById,
    createMatierePremiereDePiece,
    updateMatierePremiereDePiece,
    deleteMatierePremiereDePiece
};
