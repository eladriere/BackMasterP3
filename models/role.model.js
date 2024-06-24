const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableRole = sequelize.define('Role', {
        idRole : {primaryKey: true, type: DataTypes.INTEGER, notNull: true, autoIncrement: true},
        nomRole: {type: DataTypes.STRING, notNull: true},
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableRole = tableRole;