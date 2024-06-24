const express = require('express');
const middlewares = require('./middleswares');
const pieceRoutes = require('../controller/piece.routes');
const authRoutes = require('../controller/auth.routes');
const utilisateurRoutes = require('../controller/utilisateur.routes');
const { sequelize } = require('../sql/postgresql.db');
const { tablePiece, tablePieceComposition } = require('../models/associations');

class WebServer {
    app = undefined;
    port = 4000;
    server = undefined;

    constructor() {
        this.app = express();
        middlewares.initializeConfigMiddlewares(this.app);
        this._initializeRoutes();
        middlewares.initializeErrorMiddlwares(this.app);

        // Initialize Sequelize associations
        this._initializeAssociations();

        // Sync the models with the database
        sequelize.sync()
            .then(() => {
                console.log('Database & tables created!');
            })
            .catch(error => {
                console.error('Error creating database & tables:', error);
            });
    }

    start() {
        this.server = this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }

    stop() {
        this.server.close();
    }

    _initializeRoutes() {
        this.app.use('/pieces', pieceRoutes.initializeRoutes());
        this.app.use('/auth', authRoutes.initializeRoutes());
        this.app.use('/utilisateurs', utilisateurRoutes.initializeRoutes());
    }

    _initializeAssociations() {
        tablePiece.belongsToMany(tablePiece, { as: 'children', through: tablePieceComposition, foreignKey: 'idPieceCompose', otherKey: 'idPieceComposant' });
        tablePiece.belongsToMany(tablePiece, { as: 'parents', through: tablePieceComposition, foreignKey: 'idPieceComposant', otherKey: 'idPieceCompose' });
    }
}

module.exports = WebServer;
