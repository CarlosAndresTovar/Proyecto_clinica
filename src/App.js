import './App.css';
import Login from './pages/Login/Login';
import React, {useState, useEffect} from 'react';
import LoginDesktop from './pagesDesktop/History/History';

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
      {matches && <LoginDesktop />}
    </div>
  );
}

export default App;
