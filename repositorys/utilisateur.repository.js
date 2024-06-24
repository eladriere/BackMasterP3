// utilisateurRepository.js

const {tableUtilisateur} = require('../models/utilisateur.model');
const {where, DataTypes} = require("sequelize");
const bcrypt = require('bcryptjs');

// Function to get all Utilisateurs
async function getAllUtilisateurs() {
    try {
        return await tableUtilisateur.findAll();
    } catch (error) {
        throw error;
    }
}

// Function to get Utilisateur by ...
async function getUtilisateurById(id) {
    try {
        return await tableUtilisateur.findByPk(id);
    } catch (error) {
        throw error;
    }
}

async function getUtilisateurByMail(mail) {
    try {
        return await tableUtilisateur.findOne({where: {mail: mail}});
    } catch (error) {
        throw error;
    }
}

// Function to create a new Utilisateur
async function createUtilisateur(utilisateurData) {
    try {
        utilisateurData.motDePasse = bcrypt.hashSync(utilisateurData.motDePasse, bcrypt.genSaltSync(12));
        return await tableUtilisateur.create(utilisateurData);
    } catch (error) {
        throw error;
    }
}

// Function to update a Utilisateur
async function updateUtilisateur(id, utilisateurData) {
    try {
        const [updatedRowsCount, updatedRows] = await tableUtilisateur.update(utilisateurData, {
            where: { idUtilisateur: id },
            returning: true, // Return the updated rows
            plain: true // Return the plain object (not the Sequelize instance)
        });
        return updatedRows;
    } catch (error) {
        throw error;
    }
}

// Function to delete a Utilisateur
async function deleteUtilisateur(id) {
    try {
        return await tableUtilisateur.destroy({
            where: {idUtilisateur: id}
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllUtilisateurs,
    getUtilisateurById,
    getUtilisateurByMail,
    createUtilisateur,
    updateUtilisateur,
    deleteUtilisateur
};
