
const express = require('express');
const router = express.Router();
const Companies = require('../../schemas/companiesSchema');


router.get(`/`, async (req, res) => {
    try {
        const data = await Companies.find({});
        console.log("sending data to client");
        res.status(200).json(data);
    } catch (error) {
        console.error(" Error in retriving data ", error);
    }

});

router.get(`/:id`, (req, res) => {
    try {
        const id = req.params.id;
        Companies.findById(id)
            .then(doc => {
                console.log(doc);
                res.status(200).json(doc);
            })
            .catch(err => {
                console.log("error get document by id ", err);
                res.status(500).json({ Message: `NO company DOC with ID ${id}`, ERROR: err });
            });

    } catch (error) {
        console.error(error, "\nerror with id tag");
    }


});

router.post(`/`, async (req, res) => {
    const { companyName, email, password, branch, address, pincode } = req.body;

    let company = new Companies({
        companyName,
        email,
        password,
        branch,
        address,
        pincode
    });

    try {
        await company
            .save()
            .then(response => {
                console.log(response.companyName, " is Registered");
                res.status(200).json({ "Message": "success", "Doc": response })
            })
            .catch(error => console.log(error));
    } catch (error) {
        console.error(error, "\n Error saving DATA ");
    }

});

module.exports = router;