import './App.css';
import Login from './pages/Login/Login';
import React, {useState, useEffect} from 'react';

function App() {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1200px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className="App-login">
      {!matches && <Login />}
      {matches && (<h1>Hola mundo</h1>)}
    </div>
  );
}

export default App;
