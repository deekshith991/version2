import './css/profileblock.css';
import { useAuth } from './AuthContext';

const ProfieBlock = () => {
    const { authData } = useAuth();

    return (
        <div id='profileblock'>
            <h3>Company Name: {authData.name} </h3>
            <h3>Branch : xxxx</h3>
            <h3>Email : {authData.email}</h3>
            <h3> Jobs Issued: 0 </h3>
        </div>
    )
}

export default ProfieBlock;