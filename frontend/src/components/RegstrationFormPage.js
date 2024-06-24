import React, { useState } from 'react';
import './css/loginPage.css';

const RegistrationForm = () => {
    const [role, setRole] = useState('jobSeeker');
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        Phone: '',
        qualification: '',
        address: '',
        pincode: '',
        companyName: '',
        branch: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitUser = () => {
        console.log('submitting User');
    }

    function submitCompany() {
        console.log('submitting company');
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted user:', user);

        const decision = (role === 'jobSeeker') ? submitUser() : submitCompany()
    }

    const jobSeekerFields = (
        <>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="First Name & Last Name" name="name" value={user.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your Email" name="email" value={user.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={user.password} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Phone">Mobile Number</label>
                <input type="number" className="form-control" id="Phone" placeholder="Enter your number" name="Phone" value={user.Phone} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="qualification">Qualification</label>
                <select className="form-control" id="qualification" name="qualification" value={user.qualification} onChange={handleChange}>
                    <option value=''>Select the course</option>
                    <option value="b.tech">B.tech</option>
                    <option value="degree">Degree</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" name="address" value={user.address} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input type="number" className="form-control" id="pincode" placeholder="Pincode" name="pincode" value={user.pincode} onChange={handleChange} />
            </div>
        </>
    );

    const employerFields = (
        <>
            <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" className="form-control" id="companyName" placeholder="Company Name" name="companyName" value={user.companyName} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your Email" name="email" value={user.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={user.password} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <input type="text" className="form-control" id="branch" placeholder="Enter your branch" name="branch" value={user.branch} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" name="address" value={user.address} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input type="number" className="form-control" id="pincode" placeholder="Pincode" name="pincode" value={user.pincode} onChange={handleChange} />
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
                            <div className="form-group">
                                <label htmlFor="role">Select Role:</label>
                                <select className="form-control" id="role" value={role} onChange={handleRoleChange}>
                                    <option value="jobSeeker">Job Seeker</option>
                                    <option value="employer">Employer</option>
                                </select>
                            </div>

                            {role === 'jobSeeker' ? jobSeekerFields : employerFields}

                            <button className="btn btn-primary btn-block" id="register-btn" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
