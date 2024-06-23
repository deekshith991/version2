
const express = require('express');
const router = express.Router();
const Users = require('../../schemas/usersSchema');


router.get(`/`, async (req, res) => {
    try {
        const data = await Users.find({});
        console.log("sending data to client");
        res.status(200).json(data);
    } catch (error) {
        console.error(" Error in retriving data ", error);
    }

});

router.get(`/:id`, (req, res) => {
    try {

        const id = req.params.id;
        Users.findById(id)
            .then(doc => {
                console.log(doc);
                res.status(200).json(doc);
            })
            .catch(err => {
                console.log("error get document by id ", err);
                res.status(500).json({ Message: `NO USER DOC with ID ${id}`, ERROR: err });
            });

    } catch (error) {
        console.error(error, "\nerror with id tag");
    }

});

router.post(`/`, async (req, res) => {

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

    try {
        await user
            .save()
            .then(response => {
                console.log(response.name, " is Registered");
                res.status(200).json({ "Message": "Success", "Doc": response });
            })
            .catch(error => console.log(error));
    } catch (error) {
        console.error(error, "\n Error saving DATA ");
    }

});

module.exports = router;