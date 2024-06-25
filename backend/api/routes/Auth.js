
const express = require('express');
const router = express.Router();
const Users = require('../../schemas/usersSchema');
const Companies = require('../../schemas/companiesSchema');

router.post('/', async (req, res) => {

    const { email, password } = req.body;
    try {

        const user = await Users.findOne({ email, password });
        if (user) {
            return res.status(200).json({ message: 'Login successful', user });
        }

        const company = await Companies.findOne({ email, password });
        if (company) {
            return res.status(200).json({ message: 'Login successful for company', company });
        }
        return res.status(401).json({ message: 'Invalid credentials' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }


});


module.exports = router;