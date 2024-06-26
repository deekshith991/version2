// getting dependencies

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

/*
// getting SCHEMA modules
const Users = require('./schemas/usersSchema');
const Companies = require('./schemas/companiesSchema');
*/


const app = express();
const port = 3333;
const dbName = 'testing_db';
const mongo_URI = 'mongodb://localhost:27017';


app.use(cors());
app.use(express.json());


// connect to db 
console.log(" [#] trying to connect to DB ")
mongoose.connect(`${mongo_URI}/${dbName}`);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('error connecting to DB\n', error);
    console.log('\ncheck wheather MONGO service is Active\n')
});
db.once('open', () => {
    console.log('connected to MONGO DB\n');
    app.listen(port, () => {
        console.log(`server is UP and RUNNING on ${port}`)
    })
});

// API requests 



// test api
app.get('/test', (req, res) => {
    res.status(200).json({ message: "api is RUNNING" });
});

const loginRoute = require('./api/routes/Auth');
// importing routes
app.use('/api/Auth', loginRoute);

const userRoutes = require('./api/routes/users');
app.use('/api/users', userRoutes);


const companiesRoutes = require('./api/routes/companies');
app.use('/api/companies', companiesRoutes);

const jobsRoutes = require('./api/routes/jobs');
app.use('/api/jobs', jobsRoutes);