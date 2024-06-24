const express = require('express');
const authRepository = require("../repositorys/auth.repository");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', async(req, res) => {

    if(req.body.mail === undefined || req.body.motDePasse === undefined) {
        res.sendStatus(400)
    } else if((await authRepository.authUser(req.body.mail, req.body.motDePasse))) {
        const token = jwt.sign({ payload: `${req.body.motDePasse}${req.body.idUtilisateur}` }, 'sopKEY',
            {
                expiresIn : "30m"
            });
        res.status(200).json({ token: token })
    }
    else {
        res.sendStatus(401)
    }
})

exports.initializeRoutes = () => router;