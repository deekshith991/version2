import './css/profileblock.css';
import { useAuth } from './AuthContext';

const ProfieBlock = () => {
    const { authData, userInformation } = useAuth();

    return (
        <div id='profileblock'>
            <h4>Id : {userInformation._id}</h4>
            <h3>Company Name: {userInformation.companyName}</h3>
            <h3>Branch : {userInformation.branch} </h3>
            <h3>Email : {userInformation.email}</h3>
            <h3> Jobs Issued:( {userInformation.jobsIssued.length}) </h3>
        </div>
    )
}

export default ProfieBlock;