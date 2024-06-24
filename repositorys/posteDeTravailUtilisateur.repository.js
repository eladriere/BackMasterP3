const { tablePosteDeTravailUtilisateur } = require('../models/posteDeTravailUtilisateur.model');

// Fonction pour obtenir toutes les associations PosteDeTravailUtilisateur
async function getAllPosteDeTravailUtilisateurs() {
    try {
        const posteDeTravailUtilisateurs = await tablePosteDeTravailUtilisateur.findAll();
        return posteDeTravailUtilisateurs;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir une association PosteDeTravailUtilisateur par ID
async function getPosteDeTravailUtilisateurById(id) {
    try {
        const posteDeTravailUtilisateur = await tablePosteDeTravailUtilisateur.findByPk(id);
        return posteDeTravailUtilisateur;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer une nouvelle association PosteDeTravailUtilisateur
async function createPosteDeTravailUtilisateur(posteDeTravailUtilisateurData) {
    try {
        const newPosteDeTravailUtilisateur = await tablePosteDeTravailUtilisateur.create(posteDeTravailUtilisateurData);
        return newPosteDeTravailUtilisateur;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour une association PosteDeTravailUtilisateur
async function updatePosteDeTravailUtilisateur(id, posteDeTravailUtilisateurData) {
    try {
        const updatedPosteDeTravailUtilisateur = await tablePosteDeTravailUtilisateur.update(posteDeTravailUtilisateurData, {
            where: { idPosteDeTravailUtilisateur: id }
        });
        return updatedPosteDeTravailUtilisateur;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer une association PosteDeTravailUtilisateur
async function deletePosteDeTravailUtilisateur(id) {
    try {
        const result = await tablePosteDeTravailUtilisateur.destroy({
            where: { idPosteDeTravailUtilisateur: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPosteDeTravailUtilisateurs,
    getPosteDeTravailUtilisateurById,
    createPosteDeTravailUtilisateur,
    updatePosteDeTravailUtilisateur,
    deletePosteDeTravailUtilisateur
};
