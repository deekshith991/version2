import './App.css';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import { test } from './components/services';


function App() {

  test();

  return (
    <div className="App">
      <h1>hello</h1>
      <h2>check</h2>
      <LoginPage />
      <ProfilePage />
    </div>
  );
}

export default App;
