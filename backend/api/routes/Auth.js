
const express = require('express');
const router = express.Router();
const Users = require('../../schemas/usersSchema');
const Companies = require('../../schemas/companiesSchema');

router.post('/', async (req, res) => {

    const { email, password } = req.body;
    try {

        const user = await Users.findOne({ email, password });
        if (user) {
            const data = user;
            return res.status(200).json(data);
        }

        const company = await Companies.findOne({ email, password });
        if (company) {
            const data = company
            return res.status(200).json(data);
        }
        return res.status(401).json({ message: 'Invalid credentials' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }


});


module.exports = router;