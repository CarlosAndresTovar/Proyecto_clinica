import './App.css';
import Login from './pages/Login/Login';
import React, {useState, useEffect} from 'react';
import RecoverDesktop from './pagesDesktop/Recover/Recover';

function App() {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 800px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className="App-login">
      {!matches && <Login />}
      {matches && <RecoverDesktop />}
    </div>
  );
}

export default App;
