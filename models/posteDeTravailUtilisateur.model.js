const {DataTypes, STRING} = require("sequelize");
const {sequelize} = require("../sql/postgresql.db");

const tablePosteDeTravailUtilisateur = sequelize.define('PosteDeTravailUtilisateur', {
        idPosteDeTravailUtilisateur: {primaryKey: true, type: DataTypes.INTEGER, notNull: true, autoIncrement: true},
        idPosteDeTravail: {type: DataTypes.NUMBER, notNull: true},
        idUtilisateur : {type : DataTypes.NUMBER, notNull : true},
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

exports.tablePosteDeTravailUtilisateur = tablePosteDeTravailUtilisateur;