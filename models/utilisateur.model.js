const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tableUtilisateur = sequelize.define('Utilisateurs', {
        idUtilisateur : {primaryKey: true, type: DataTypes.UUID, notNull: true, defaultValue : DataTypes.UUIDV4},
        idRoles: {type: DataTypes.INTEGER, notNull: true},
        nom : {type : DataTypes.STRING, notNull : true},
        prenom : {type : DataTypes.STRING, notNull : true},
        mail : {type : DataTypes.STRING, notNull : true, unique : true},
        motDePasse : {type : DataTypes.STRING, notNull : true,}
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tableUtilisateur = tableUtilisateur;