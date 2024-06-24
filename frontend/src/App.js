import './App.css';
import LoginPage from './components/LoginPage';
import { test } from './components/services';


function App() {

  test();

  return (
    <div className="App">
      <h1>hello</h1>
      <h2>check</h2>
      <LoginPage />
    </div>
  );
}

export default App;
