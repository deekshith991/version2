

const express = require('express');
const router = express.Router();
const Jobs = require('../../schemas/jobSchema');
const Users = require('../../schemas/usersSchema');

router.get('/alfa', async (req, res) => {
    try {
        const data = await Jobs.find({});
        console.log('sending data to client');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error retriving Data\n', error)
    }
});

router.get('/', async (req, res) => {
    try {
        const jobs = await Jobs.find();
        res.json(jobs).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/:id', (req, res) => {

    try {
        const id = req.params.id;
        Jobs.findById(id)
            .then(doc => {
                console.log(doc);
                res.status(200).json(doc);
            })
            .catch(err => {
                console.log("error get document by id ", err);
                res.status(500).json({ Message: `NO company DOC with ID ${id}`, ERROR: err });
            })
    } catch (error) {
        console.error(error, "\nerror with id tag");
    }
});

router.post('/', async (req, res) => {
    const { employer, company, position, workType, workLocation, salary, email } = req.body;

    let job = new Jobs({
        employer,
        company,
        position,
        workType,
        workLocation,
        salary,
        email,
    });

    try {
        const jobdata = await job
            .save()
            .then(response => {
                console.log(response.company, " is Registered");
                res.status(200).json({ "Message": "success", "Doc": response })
            })
            .catch(error => console.log(error));
        const user = await Users.findById(employer);
        user.jobsIssued.push(jobdata._id);
        await user.save();
    } catch (error) {
        console.error(error, "\n Error saving DATA ");
    }


});

router.post('/:applicantId', async (req, res) => {

    const ID = req.params.applicantId;
})


module.exports = router;