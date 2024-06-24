// roleUtilisateurRepository.js

const RoleUtilisateur = require('../models/RoleUtilisateur');

// Function to get all RoleUtilisateurs
async function getAllRoleUtilisateurs() {
    try {
        const roleUtilisateurs = await RoleUtilisateur.findAll();
        return roleUtilisateurs;
    } catch (error) {
        throw error;
    }
}

// Function to get RoleUtilisateur by ID
async function getRoleUtilisateurById(id) {
    try {
        const roleUtilisateur = await RoleUtilisateur.findByPk(id);
        return roleUtilisateur;
    } catch (error) {
        throw error;
    }
}

// Function to create a new RoleUtilisateur
async function createRoleUtilisateur(roleUtilisateurData) {
    try {
        const newRoleUtilisateur = await RoleUtilisateur.create(roleUtilisateurData);
        return newRoleUtilisateur;
    } catch (error) {
        throw error;
    }
}

// Function to update a RoleUtilisateur
async function updateRoleUtilisateur(id, roleUtilisateurData) {
    try {
        const [updatedRowsCount, updatedRows] = await RoleUtilisateur.update(roleUtilisateurData, {
            where: { idRoles: id },
            returning: true, // Return the updated rows
            plain: true // Return the plain object (not the Sequelize instance)
        });
        return updatedRows;
    } catch (error) {
        throw error;
    }
}

// Function to delete a RoleUtilisateur
async function deleteRoleUtilisateur(id) {
    try {
        const deletedRowCount = await RoleUtilisateur.destroy({
            where: { idRoles: id }
        });
        return deletedRowCount;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllRoleUtilisateurs,
    getRoleUtilisateurById,
    createRoleUtilisateur,
    updateRoleUtilisateur,
    deleteRoleUtilisateur
};
