const express = require('express');
const pieceRepository = require('../repositorys/piece.repository');
const router = express.Router();

router.get('/:offset/:limit', async (req, res) => {
    try {
        const pieces = await pieceRepository.getAllPieceWithRange(req.params.offset, req.params.limit);
        res.status(200).send(pieces);
    } catch (error) {
        console.error('Error fetching pieces:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid request body');
    }

    try {
        console.log('Request body:', req.body.data);

        if (await isPieceAlreadyExist(req.body.data)) {
            return res.status(400).send('Piece already exists');
        }

        const result = await pieceRepository.createPiece(req.body.data);
        console.log('Creation result:', result);

        if (result) {
            res.status(201).send('Piece created successfully');
        } else {
            res.status(403).send('Piece creation failed');
        }
    } catch (error) {
        console.error('Error creating piece:', error);
        res.status(500).send('Internal Server Error');
    }
});

async function isPieceAlreadyExist(data) {
    console.log('Checking existence for:', data);
    if (data && data.piece && data.piece.nom) {
        const existingPiece = await pieceRepository.getPieceByNom(data.piece.nom);
        return !!existingPiece; // Return true if piece exists, false otherwise
    } else {
        return true; // Return true to indicate invalid data structure
    }
}

exports.initializeRoutes = () => router;
