const { tableRole } = require('../models/role.model');

// Fonction pour obtenir tous les rôles
async function getAllRoles() {
    try {
        const roles = await tableRole.findAll();
        return roles;
    } catch (error) {
        throw error;
    }
}

// Fonction pour obtenir un rôle par ID
async function getRoleById(id) {
    try {
        const role = await tableRole.findByPk(id);
        return role;
    } catch (error) {
        throw error;
    }
}

// Fonction pour créer un nouveau rôle
async function createRole(roleData) {
    try {
        const newRole = await tableRole.create(roleData);
        return newRole;
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour un rôle
async function updateRole(id, roleData) {
    try {
        const updatedRole = await tableRole.update(roleData, {
            where: { idRole: id }
        });
        return updatedRole;
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer un rôle
async function deleteRole(id) {
    try {
        const result = await tableRole.destroy({
            where: { idRole: id }
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
};
