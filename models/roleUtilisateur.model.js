const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableRoleUtilisateur = sequelize.define('RoleUtilisateur', {
        idRoles : {primaryKey: true, type: DataTypes.INTEGER, notNull: true, autoIncrement: true},
        idUtilisateur: {type: DataTypes.NUMBER, notNull: true},
        idRole : {type : DataTypes.NUMBER, notNull : true},
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableRoleUtilisateur = tableRoleUtilisateur;