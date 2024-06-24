const { tablePosteDeTravailMachine } = require('../models/posteDeTravailMachine.model');

// Fonction pour obtenir toutes les associations PosteDeTravailMachine
async function getAllPosteDeTravailMachines() {
    try {
        const posteDeTravailMachines = await tablePosteDeTravailMachine.findAll();
        return posteDeTravailMachines;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir une association PosteDeTravailMachine par ID
async function getPosteDeTravailMachineById(id) {
    try {
        const posteDeTravailMachine = await tablePosteDeTravailMachine.findByPk(id);
        return posteDeTravailMachine;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer une nouvelle association PosteDeTravailMachine
async function createPosteDeTravailMachine(posteDeTravailMachineData) {
    try {
        const newPosteDeTravailMachine = await tablePosteDeTravailMachine.create(posteDeTravailMachineData);
        return newPosteDeTravailMachine;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour une association PosteDeTravailMachine
async function updatePosteDeTravailMachine(id, posteDeTravailMachineData) {
    try {
        const updatedPosteDeTravailMachine = await tablePosteDeTravailMachine.update(posteDeTravailMachineData, {
            where: { idPosteDeTravailMachine: id }
        });
        return updatedPosteDeTravailMachine;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer une association PosteDeTravailMachine
async function deletePosteDeTravailMachine(id) {
    try {
        const result = await tablePosteDeTravailMachine.destroy({
            where: { idPosteDeTravailMachine: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPosteDeTravailMachines,
    getPosteDeTravailMachineById,
    createPosteDeTravailMachine,
    updatePosteDeTravailMachine,
    deletePosteDeTravailMachine
};
