const { tableCompositionPiece } = require('../models/compositionPiece.model');

// Fonction pour obtenir toutes les compositions
async function getAllCompositions() {
    try {
        const compositions = await tableCompositionPiece.findAll();
        return compositions;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir une composition par ID
async function getCompositionById(id) {
    try {
        const composition = await tableCompositionPiece.findByPk(id);
        return composition;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer une nouvelle composition
async function createComposition(compositionData) {
    try {
        const newComposition = await tableCompositionPiece.create(compositionData);
        return newComposition;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour une composition
async function updateComposition(id, compositionData) {
    try {
        const updatedComposition = await tableCompositionPiece.update(compositionData, {
            where: { idCompositionPiece: id }
        });
        return updatedComposition;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer une composition
async function deleteComposition(id) {
    try {
        const result = await tableCompositionPiece.destroy({
            where: { idCompositionPiece: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllCompositions,
    getCompositionById,
    createComposition,
    updateComposition,
    deleteComposition
};
