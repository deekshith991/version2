
// getting dependencies
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

// getting modules
const Users = require('./schemas/usersSchema');


const app = express();
const PORT = 3333;

const DB_NAME = 'testing_db';
const mongo_URI = 'mongodb://localhost:27017'


app.use(cors());
app.use(express.json());


// connect to db 
mongoose.connect(`${mongo_URI}/${DB_NAME}`);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('error connecting to DB\n', error);
    console.log('\ncheck wheather MONGO service is Active\n')
});
db.once('open', () => {
    console.log('connected to MONGO DB\n');
    app.listen(PORT, () => {
        console.log(`server is UP and RUNNING`)
    })
});


