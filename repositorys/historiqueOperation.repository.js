const { tableHistoriqueOperation } = require('../models/historiqueOperation.model');

// Fonction pour obtenir tous les historiques d'opération
async function getAllHistoriqueOperations() {
    try {
        const historiqueOperations = await tableHistoriqueOperation.findAll();
        return historiqueOperations;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir un historique d'opération par ID
async function getHistoriqueOperationById(id) {
    try {
        const historiqueOperation = await tableHistoriqueOperation.findByPk(id);
        return historiqueOperation;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer un nouvel historique d'opération
async function createHistoriqueOperation(historiqueOperationData) {
    try {
        const newHistoriqueOperation = await tableHistoriqueOperation.create(historiqueOperationData);
        return newHistoriqueOperation;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour un historique d'opération
async function updateHistoriqueOperation(id, historiqueOperationData) {
    try {
        const updatedHistoriqueOperation = await tableHistoriqueOperation.update(historiqueOperationData, {
            where: { idHistoriqueOperation: id }
        });
        return updatedHistoriqueOperation;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer un historique d'opération
async function deleteHistoriqueOperation(id) {
    try {
        const result = await tableHistoriqueOperation.destroy({
            where: { idHistoriqueOperation: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllHistoriqueOperations,
    getHistoriqueOperationById,
    createHistoriqueOperation,
    updateHistoriqueOperation,
    deleteHistoriqueOperation
};
