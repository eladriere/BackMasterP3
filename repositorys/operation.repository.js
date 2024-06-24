const { tableOperation } = require('../models/operation.model');

// Fonction pour obtenir toutes les opérations
async function getAllOperations() {
    try {
        const operations = await tableOperation.findAll();
        return operations;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir une opération par ID
async function getOperationById(id) {
    try {
        const operation = await tableOperation.findByPk(id);
        return operation;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer une nouvelle opération
async function createOperation(operationData) {
    try {
        const newOperation = await tableOperation.create(operationData);
        return newOperation;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour une opération
async function updateOperation(id, operationData) {
    try {
        const updatedOperation = await tableOperation.update(operationData, {
            where: { idOperation: id }
        });
        return updatedOperation;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer une opération
async function deleteOperation(id) {
    try {
        const result = await tableOperation.destroy({
            where: { idOperation: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllOperations,
    getOperationById,
    createOperation,
    updateOperation,
    deleteOperation
};
