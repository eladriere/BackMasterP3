const bcrypt = require('bcryptjs');
const {tableUtilisateur} = require("../models/utilisateur.model");

exports.authUser = async function authUser(mail, password) {
    const userAuth = await tableUtilisateur.findOne({ where: { mail: mail } });
    if (!userAuth) {
        return false;
    } else {
        console.log("vefifMdp",password, userAuth.motDePasse, bcrypt.compareSync(password, userAuth.motDePasse))
        return bcrypt.compareSync(password, userAuth.motDePasse);
    }
};