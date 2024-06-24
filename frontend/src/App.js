import './App.css';
import AddJOB from './components/AddJOBpage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import RegistrationForm from './components/RegstrationFormPage';


function App() {



  return (
    <div className="App">
      <AddJOB />
      <RegistrationForm />
      <ProfilePage />
    </div>
  );
}

export default App;
