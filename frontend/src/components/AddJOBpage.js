
import './css/addjob.css';
import { useState } from 'react';

const AddJOB = () => {

    const [regData, setRegData] = useState({
        company: "",
        position: "",
        workType: "",
        workLocation: "",
        salary: "",
        contact: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegData({ ...regData, [name]: value });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const formData = {
            company: regData.company,
            position: regData.position,
            workType: regData.workType,
            workLocation: regData.workLocation,
            salary: regData.salary,
            email: regData.contact
        }

        console.log('submiitin job', formData);


    }


    return (
        <div className='ISSUEJOB'>
            <div className="container">
                <h2> ISSUE A JOB </h2>
                <div className="d-flex flex-row">
                    <div className="job-box">
                        <form onSubmit={handleRegister}>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" className="form-control" id="company" placeholder="Enter your first name" name="company" value={regData.company} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="position">position</label>
                                <input type="text" className="form-control" id="position" placeholder=" position" name="position" value={regData.lastName} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="workType">Choose Type :</label><br />
                                <select id="workType" name="workType" value={regData.workType} onChange={handleChange}>
                                    <option value='null' >select</option>
                                    <option value="internship" >internship</option>
                                    <option value="part-time" >part-time</option>
                                    <option value="full-time" >full-time</option>

                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="workLocation">Address</label>
                                <input type="text" className="form-control" id="workLocation" placeholder="workLocation" name="workLocation" value={regData.workLocation} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary ">salary </label>
                                <input type="number" className="form-control" id="salary" placeholder="Enter salary per Annum"
                                    name="salary" value={regData.salary} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">contact</label>
                                <input type="email" className="form-control" id="contact" placeholder="Enter your Email" name="contact" value={regData.contact} onChange={handleChange} />
                            </div>




                            <button type="submit" className="btn btn-success btn-block" id="issue-btn">ISSUE JOB</button>

                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default AddJOB;