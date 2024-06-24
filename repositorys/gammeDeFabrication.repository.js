const { tableGammeDeFabrication } = require('../models/gammeDeFabrication.model');

// Fonction pour obtenir toutes les gammes de fabrication
async function getAllGammes() {
    try {
        const gammes = await tableGammeDeFabrication.findAll();
        return gammes;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir une gamme de fabrication par ID
async function getGammeById(id) {
    try {
        const gamme = await tableGammeDeFabrication.findByPk(id);
        return gamme;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer une nouvelle gamme de fabrication
async function createGamme(gammeData) {
    try {
        const newGamme = await tableGammeDeFabrication.create(gammeData);
        return newGamme;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour une gamme de fabrication
async function updateGamme(id, gammeData) {
    try {
        const updatedGamme = await tableGammeDeFabrication.update(gammeData, {
            where: { idGammeDeFabrication: id }
        });
        return updatedGamme;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer une gamme de fabrication
async function deleteGamme(id) {
    try {
        const result = await tableGammeDeFabrication.destroy({
            where: { idGammeDeFabrication: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllGammes,
    getGammeById,
    createGamme,
    updateGamme,
    deleteGamme
};
