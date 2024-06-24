const express = require('express');
const pieceRepository = require('../repositorys/piece.repository');
const router = express.Router();

router.get('/:offset/:limit', async (req, res) => {
    res.send(await pieceRepository.getAllPieceWithRange(req.params.offset, req.params.limit));
});

router.post('/', async (req, res) => {
    if (!req.body) {
        res.sendStatus(400)
    }

    console.log(req.body)

    if (await isPieceAlreadyExist(req.body.data)) {
        res.sendStatus(400)
    } else {
        let result = pieceRepository.createPiece(req.body.data);
        console.log(result)
        if (result) {
            res.sendStatus(200)
        } else {
            res.sendStatus(403)
        }
    }
});

async function isPieceAlreadyExist(data) {
    console.log(data)
    if(data !== undefined && data.piece !== undefined && data.piece.nom !== undefined) {
        return await pieceRepository.getPieceByNom(data.piece.nom);
    } else {
        return true
    }
}

exports.initializeRoutes = () => router;