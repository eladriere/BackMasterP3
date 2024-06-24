const { tableMachine } = require('../models/machine.model');

// Fonction pour obtenir toutes les machines
async function getAllMachines() {
    try {
        const machines = await tableMachine.findAll();
        return machines;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir une machine par ID
async function getMachineById(id) {
    try {
        const machine = await tableMachine.findByPk(id);
        return machine;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer une nouvelle machine
async function createMachine(machineData) {
    try {
        const newMachine = await tableMachine.create(machineData);
        return newMachine;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour une machine
async function updateMachine(id, machineData) {
    try {
        const updatedMachine = await tableMachine.update(machineData, {
            where: { idMachine: id }
        });
        return updatedMachine;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer une machine
async function deleteMachine(id) {
    try {
        const result = await tableMachine.destroy({
            where: { idMachine: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllMachines,
    getMachineById,
    createMachine,
    updateMachine,
    deleteMachine
};
