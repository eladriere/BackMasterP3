const express = require('express');
const utilisateurRepository = require("../repositorys/utilisateur.repository");
const router = express.Router();

router.get('/', async (req,res) => {
    res.send(await utilisateurRepository.getAllUtilisateurs());
})

router.post('/', async (req, res) => {
    if (!req.body) {
        res.sendStatus(400)
    } else if (await utilisateurRepository.getUtilisateurByMail(req.body.mail)) {
        res.sendStatus(400)
    } else if(await utilisateurRepository.createUtilisateur(req.body)) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
});

router.get('/:mail', async (req,res) => {
    res.send(await utilisateurRepository.getUtilisateurByMail(req.params.mail));
})

exports.initializeRoutes = () => router;