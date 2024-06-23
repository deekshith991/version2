
// getting dependencies
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

// getting modules
const Users = require('./schemas/usersSchema');
const Companies = require('./schemas/companiesSchema');


const app = express();
const PORT = 3333;

const DB_NAME = 'testing_db';
const mongo_URI = 'mongodb://localhost:27017';


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

// API requests 



// test api
app.get('/test', (req, res) => {
    res.status(200).json({ message: "api is RUNNING" });
});

// register a user in db
app.post(`/api/users`, async (req, res) => {

    const { name, email, password, phone, qualification, address, pincode } = req.body;

    let user = new Users({
        name,
        email,
        password,
        phone,
        qualification,
        address,
        pincode
    });
    const result = await user
        .save()
        .then(response => console.log(response))
        .catch(error => console.log(error));
    res.status(200).send(result);

});

app.get(`/api/users`, async (req, res) => {
    try {
        const data = await Users.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error(" Error in retriving data ", error);
    }

});

app.get(`/api/users/:id`);




app.post(`/api/companies`, async (req, res) => {
    const { companyName, email, password, branch, address, pincode } = req.body;

    let company = new Companies({
        companyName,
        email,
        password,
        branch,
        address,
        pincode
    });
    const result = await company
        .save()
        .then(response => console.log(response))
        .catch(error => console.log(error));
    res.status(200).send(result);

});

app.get(`/api/companies`, async (req, res) => {
    try {
        const data = await Companies.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error(" Error in retriving data ", error);
    }

});

app.get(`/api/companies/:id`)
