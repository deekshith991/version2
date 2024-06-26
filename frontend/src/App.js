import './App.css';
import { useAuth } from './components/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddJOB from './components/AddJOBpage';
import LoginPage from './components/LoginPage';
import SessionPage from './components/SessionPage.js';
import RegistrationForm from './components/RegstrationFormPage';
import Homepage from './components/HomePage.js'

function App() {
  const { authData } = useAuth();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationForm />} />

          {authData.isLoggedIn ? (
            <>
              <Route path='/session' element={<SessionPage />} />
              <Route path='/addjob' element={<AddJOB />} />
              <Route path='/' element={<Navigate to='/profile' replace />} />
            </>
          ) : (
            <Route path='*' element={<Navigate to='/login' replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
