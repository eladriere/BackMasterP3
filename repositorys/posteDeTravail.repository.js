const { tablePosteDeTravail } = require('../models/posteDeTravail.model');

// Fonction pour obtenir tous les postes de travail
async function getAllPostesDeTravail() {
    try {
        const postesDeTravail = await tablePosteDeTravail.findAll();
        return postesDeTravail;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir un poste de travail par ID
async function getPosteDeTravailById(id) {
    try {
        const posteDeTravail = await tablePosteDeTravail.findByPk(id);
        return posteDeTravail;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer un nouveau poste de travail
async function createPosteDeTravail(posteDeTravailData) {
    try {
        const newPosteDeTravail = await tablePosteDeTravail.create(posteDeTravailData);
        return newPosteDeTravail;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour un poste de travail
async function updatePosteDeTravail(id, posteDeTravailData) {
    try {
        const updatedPosteDeTravail = await tablePosteDeTravail.update(posteDeTravailData, {
            where: { idPosteDeTravail: id }
        });
        return updatedPosteDeTravail;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer un poste de travail
async function deletePosteDeTravail(id) {
    try {
        const result = await tablePosteDeTravail.destroy({
            where: { idPosteDeTravail: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPostesDeTravail,
    getPosteDeTravailById,
    createPosteDeTravail,
    updatePosteDeTravail,
    deletePosteDeTravail
};
