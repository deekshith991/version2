
import React, { useState } from 'react';
import './css/loginPage.css';

const RegistrationForm = () => {
    const [role, setRole] = useState('jobSeeker');

    const [regUser, setRegUser] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegUser({ ...regUser, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    // Define fields for each role
    const jobSeekerFields = (
        <>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="lastname" placeholder="First Name   &   Last Name" name="name" value={regUser.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email" className="form-control" id="Email" placeholder="Enter your Email" name="email" value={regUser.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={regUser.password} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Mobile Number">mobile Number</label>
                <input type="number" className="form-control" id="confirmPassword" placeholder="Enter your number"
                    name="Phone" value={regUser.Phone} onChange={handleChange} />
            </div>
            <label>
                QUALIFICATION:
                <select value={regUser.qualification} onChange={handleChange} id='qualification'>
                    <option value=''>select the course</option>
                    <option value="b.tech">B.tech</option>
                    <option value="degree">degree</option>
                </select>
            </label>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="Address" placeholder="Enter your address" name="address" value={regUser.address} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input type="number" className="form-control" id="Pincode" placeholder="Pincode" name="pincode" value={regUser.pincode} onChange={handleChange} />
            </div>
        </>
    );

    const employerFields = (
        <>
            <div className="form-group">
                <label htmlFor="companyName">company Name</label>
                <input type="text" className="form-control" id="companyName" placeholder="company Name" name="companyName" value={regUser.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email" className="form-control" id="Email" placeholder="Enter your Email" name="email" value={regUser.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={regUser.password} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="branch">branch</label>
                <input type="text" className="form-control" id="branch" placeholder="Enter your branch" name="branch" value={regUser.branch} onChange={handleChange} />
            </div>


            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="Address" placeholder="Enter your address" name="address" value={regUser.address} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input type="number" className="form-control" id="Pincode" placeholder="Pincode" name="pincode" value={regUser.pincode} onChange={handleChange} />
            </div>

        </>
    );

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };


    return (
        <div className='REGISTER'>
            <div className="container">

                <div className="d-flex flex-row">
                    <div className="reg-box">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Select Role:
                                <select value={role} onChange={handleRoleChange} id='role'>
                                    <option value="jobSeeker">Job Seeker</option>
                                    <option value="employer">Employer</option>
                                </select>
                            </label>

                            {role === 'jobSeeker' ? jobSeekerFields : employerFields}

                            <button className="btn btn-primary btn-block" id="register-btn" type='submit' >Register</button>
                        </form>

                        {/* <p className="text-center mt-3" id="register-link">Don't have an account? <Link >Register</Link></p> */}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegistrationForm;
