const { Sequelize } = require('sequelize');
require('dotenv').config();
const { PostgresDialect } = require("@sequelize/postgres");

let dsn = process.env.CONNECTION_STRING;
if (dsn === undefined) {
    const { env } = process;
    const read_base64_json = function(varName) {
        try {
            return JSON.parse(Buffer.from(env[varName], "base64").toString())
        } catch (err) {
            throw new Error(`no ${varName} environment variable`)
        }
    };
    const variables = read_base64_json('PLATFORM_VARIABLES')
    dsn = variables["CONNECTION_STRING"]
}

exports.sequelize = new Sequelize(dsn);