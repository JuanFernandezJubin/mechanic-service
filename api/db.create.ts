import { createConnection } from 'mysql2/promise';
import * as dotenv from 'dotenv';

//Script to create the database if its not exist >> npm run db:create

dotenv.config({path: __dirname + '/src/.env'});
const dbName = process.env.DB_NAME || 'testing';

function createDB (){
    createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'testing',
        password: process.env.DB_PASSWORD || 'testpassword'
    }).then( conn => {
        conn.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`)
        .then( result => {
            console.log('Database Created');
            process.exit(0)
        })
    })

}

createDB();


